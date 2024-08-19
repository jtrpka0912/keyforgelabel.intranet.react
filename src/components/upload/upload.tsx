import './upload.css';

/**
 * @function UploadButton
 * @description The floating action button to bring up the upload pop-up
 * @author J. Trpka
 * @returns 
 */
const UploadButton = () => {
    return (
        <button
            className="upload__button"
        >Upload</button>
    );
};

const Upload = () => {
    return (
        <div>
            <UploadButton />
        </div>
    );
};

export default Upload;