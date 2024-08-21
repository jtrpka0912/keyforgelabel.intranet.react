import { Expansions } from '../../models/keyforge/deck';
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
    /**
     * @function printExpansionName
     * @description Print the expansion name based on expansion id
     * @author J. Trpka
     * @param expansionID 
     * @returns 
     */
    const printExpansionName = (expansionID: number): string => {
        switch(expansionID) {
            case Expansions.CallOfTheArchons: return 'Call of the Archons';
            case Expansions.AgeOfAscension: return 'Age of Ascension';
            case Expansions.WorldsCollide: return 'Worlds Collide';
            case Expansions.MassMutations: return 'Mass Mutations';
            case Expansions.DarkTidings: return 'Dark Tidings';
            case Expansions.WindsOfExchange: return 'Winds of Exchange';
            case Expansions.Unchained2022: return 'Unchained 2023';
            case Expansions.VaultMasters2023: return 'Vault Master 2023';
            case Expansions.GrimReminders: return 'Grim Reminders';
            case Expansions.Menagerie2024: return 'Menagerie 2024';
            case Expansions.VaultMasters2024: return 'Vault Masters 2024';
            default: return 'Unknown Expansion';
        }
    }

    return (
        <div className="label">
            <div className="label__left">
                <h2 className="label__name">{deck.data.name}</h2>
                <p className="label__set">{printExpansionName(deck.data.expansion)}</p>
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