import React from 'react';
import './upload.css';
import { UploadButtonProps, UploadDialogProps } from './upload.types';

/**
 * @function UploadDialog
 * @description The dialog where the user can upload a deck to the sheet
 * @author J. Trpka
 * @param {boolean} isOpen
 * @returns {JSX.Element}
 */
const UploadDialog = ({isOpen}: UploadDialogProps) => {
    const elementRef = React.useRef<HTMLDialogElement>(null);

    React.useEffect(() => {
        if(elementRef && elementRef.current) {
            if(isOpen) {
                elementRef.current.showModal();
            } else {
                elementRef.current.close();
            }
            
        }
    }, [isOpen]);

    return (
        <dialog 
            ref={elementRef} 
            className="upload__dialog">
            <p>Hello World</p>
        </dialog>
    );
};

/**
 * @function UploadButton
 * @description The floating action button to bring up the upload pop-up
 * @author J. Trpka
 * @param {function} onClick
 * @returns {JSX.Element}
 */
const UploadButton = ({onClick}: UploadButtonProps) => {
    return (
        <button 
            className="upload__button"
            onClick={onClick}
        >Upload</button>
    );
};

/**
 * @function Upload
 * @description The wrapper that contains the FAB and Dialog
 * @author J. Trpka
 * @returns {JSX.Element}
 */
const Upload = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const handleOnClickOpenModal = () => {
        setIsOpen(true);
    }

    return (
        <div className="upload">
            <UploadButton onClick={handleOnClickOpenModal} />
            <UploadDialog isOpen={isOpen} />
        </div>
    );
};

export default Upload;