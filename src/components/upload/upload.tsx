import React from 'react';
import './upload.css';
import { UploadButtonProps, UploadDialogProps } from './upload.types';
import Input from '../input/input';

/**
 * @function UploadDialog
 * @description The dialog where the user can upload a deck to the sheet
 * @author J. Trpka
 * @param {boolean} isOpen
 * @returns {JSX.Element}
 */
const UploadDialog = ({isOpen, onClose}: UploadDialogProps) => {
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
            className="upload__dialog"
        >
            <form>
                <Input
                    type="url"
                    name="url"
                    id="url"
                    label="Deck URL"
                    placeholder="Place URL of Master Vault Deck"
                    required={true} 
                />

                <div className="upload__dialog-buttons">
                    <button type="submit" className="upload__dialog-submit-button">Submit</button>
                    <button type="reset" className="upload__dialog-cancel-button" onClick={onClose}>Close</button>
                </div>
            </form>
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

    /**
     * @function handleOnClickOpenModal
     * @description Open the upload modal
     * @author J. Trpka
     * @returns {void}
     */
    const handleOnClickOpenModal = () => {
        setIsOpen(true);
    }

    /**
     * @function handleOnClickCloseModal
     * @description Close the upload modal
     * @author J. Trpka
     * @returns {void}
     */
    const handleOnClickCloseModal = () => {
        setIsOpen(false);
    }

    return (
        <div className="upload">
            <UploadButton onClick={handleOnClickOpenModal} />
            <UploadDialog isOpen={isOpen} onClose={handleOnClickCloseModal} />
        </div>
    );
};

export default Upload;