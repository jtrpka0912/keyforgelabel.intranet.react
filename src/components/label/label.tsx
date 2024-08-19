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
            <div className="label__left">
                <h2 className="label__name">Jeremy of the grand majestic Flibbles</h2>
                <p className="label__set">Grim Reminders</p>
            </div>

            <div className="label__right">
                <img src="https://placehold.co/100x100" alt="Placeholder" />
                <img src="https://placehold.co/100x100" alt="Placeholder" />
                <img src="https://placehold.co/100x100" alt="Placeholder" />
            </div>
        </div>
    );
};

export default Label;