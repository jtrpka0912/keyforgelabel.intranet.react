import './label.css';
import LabelProps from './label.types';

/**
 * @function Label
 * @description A single label for a deck
 * @author J. Trpka
 * @param {Deck} deck
 * @returns {JSX.Element}
 */
const Label = ({
    deck
}: LabelProps) => {
    return (
        <div className="label">
            <div className="label__left">
                <h2 className="label__name">{deck.name}</h2>
                <p className="label__set">{deck.expansion}</p>
            </div>

            <div className="label__right">
                <img src={deck.houseOne.path} alt={`${deck.houseOne.name} Insignia`} />
                <img src={deck.houseTwo.path} alt={`${deck.houseTwo.name} Insignia`} />
                <img src={deck.houseThree.path} alt={`${deck.houseThree.name} Insignia`} />
            </div>
        </div>
    );
};

export default Label;