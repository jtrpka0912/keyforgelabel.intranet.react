import './label.css';
import LabelProps from './label.types';

/**
 * @function Label
 * @description A single label for a deck
 * @author J. Trpka
 * @returns {JSX.Element}
 */
const Label = ({
    deck
}: LabelProps) => {
    return (
        <div className="label">
            <div className="label__left">
                <h2 className="label__name">{deck.data.name}</h2>
                <p className="label__set">{deck.data.expansion}</p>
            </div>

            <div className="label__right">
                <img src={deck._linked.houses[0].image} alt={`${deck._linked.houses[0].name} Insignia`} />
                <img src={deck._linked.houses[1].image} alt={`${deck._linked.houses[1].name} Insignia`} />
                <img src={deck._linked.houses[2].image} alt={`${deck._linked.houses[2].name} Insignia`} />
            </div>
        </div>
    );
};

export default Label;