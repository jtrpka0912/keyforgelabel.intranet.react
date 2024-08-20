import React from 'react';
import './upload.css';
import { UploadButtonProps, UploadDialogProps, UploadFormProps } from './upload.types';
import Input from '../input/input';

/**
 * @function UploadForm
 * @description Upload a deck using this simple form
 * @author J. Trpka
 * @param {function} onClose
 * @returns {JSX.Element}
 */
const UploadForm = ({
    onClose
}: UploadFormProps) => {
    const [url, setUrl] = React.useState('');

    /**
     * @function handleOnChangeSetUrl
     * @description Set the URL value to local state
     * @author J. Trpka
     * @param {React.ChangeEvent<HTMLInputElement>} e 
     * @returns {void}
     */
    const handleOnChangeSetUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value;

        setUrl(value);
    }

    /**
     * @function handleOnResetClearForm
     * @description Clear the form (state)
     * @author J. Trpka
     * @returns {void}
     */
    const handleOnResetClearForm = () => {
        setUrl('');
    }

    /**
     * @function handleOnSubmitUploadDeck
     * @description Validate and request data from the API
     * @author J. Trpka
     * @param {React.FormEvent<HTMLFormElement>} e 
     * @returns {void}
     */
    const handleOnSubmitUploadDeck = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.info(url);
    }

    return (
        <form
            className="upload__form" 
            onSubmit={(e) => handleOnSubmitUploadDeck(e)}
            onReset={handleOnResetClearForm}
        >
            <Input
                type="url"
                name="url"
                id="url"
                label="Deck URL"
                placeholder="Place URL of Master Vault Deck"
                required={true} 
                value={url}
                onChange={handleOnChangeSetUrl}
            />

            <div className="upload__form-buttons">
                <button type="submit" className="upload__form-submit-button">Submit</button>
                <button type="reset" className="upload__form-cancel-button" onClick={onClose}>Close</button>
            </div>
        </form>
    );
};

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
            <UploadForm onClose={onClose} />
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