import './label.css';

/**
 * @function Label
 * @description A single label for a deck
 * @author J. Trpka
 * @returns {JSX.Element}
 */
const Label = () => {
    return (
        <div className="label">
            <h2 className="label__name">Jeremy of the Flibbles</h2>
            <p className="label__set">Grim Reminders</p>
        </div>
    );
};

export default Label;