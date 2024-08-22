import { DeckResponse } from "../../models/keyforge/deck-response";

export enum Expansions {
    CallOfTheArchons = 341,
    AgeOfAscension = 435,
    WorldsCollide = 452,
    MassMutations = 479,
    DarkTidings = 496,
    WindsOfExchange = 600,
    Unchained2022 = 601,
    VaultMasters2023 = 609,
    GrimReminders = 700,
    Menagerie2024 = 722,
    VaultMasters2024 = 737,
    // TODO: Add the new ones
}

type DeckObject = {
    id: string;
    name: string;
    expansion: string;
    houseOne: DeckHouseObject;
    houseTwo: DeckHouseObject;
    houseThree: DeckHouseObject;
}

type DeckHouseObject = {
    name: string;
    path: string;
}

/**
 * @class Deck
 * @description Simple data of a single archon deck
 * @author J. Trpka
 * @prop {string} id
 * @prop {string} name
 * @prop {string} expansion
 * @prop {DeckHouse} houseOne
 * @prop {DeckHouse} houseTwo
 * @prop {DeckHouse} houseThree 
 */
export class Deck {
    private _id: string;
    private _name: string;
    private _expansion: string;
    private _houseOne: DeckHouse;
    private _houseTwo: DeckHouse;
    private _houseThree: DeckHouse;

    /**
     * @constructor
     * @description Take the deck response, from the API, and convert it to a deck
     * @author J. Trpka
     * @this {Deck}
     * @param {DeckResponse} deckData 
     */
    constructor(deckData: DeckResponse) {
        const houseOneData = deckData._linked.houses[0];
        const houseTwoData = deckData._linked.houses[1];
        const houseThreeData = deckData._linked.houses[2];

        this._id = deckData.data.id;
        this._name = deckData.data.name;
        this._expansion = Deck.getExpansionName(deckData.data.expansion);
        this._houseOne = new DeckHouse(houseOneData.name, houseOneData.image);
        this._houseTwo = new DeckHouse(houseTwoData.name, houseTwoData.image);
        this._houseThree = new DeckHouse(houseThreeData.name, houseThreeData.image);
    }

    // Make the properties read only
    public get id() { return this._id; }
    public get name() { return this._name; }
    public get expansion() { return this._expansion; }
    public get houseOne() { return this._houseOne; }
    public get houseTwo() { return this._houseTwo; }
    public get houseThree() { return this._houseThree; }

    /**
     * @public
     * @function toJSONString
     * @description Convert the object to a JSON string
     * @author J. Trpka
     * @this {Deck}
     * @returns {string}
     */
    public toJSONString = (): string => {
        return JSON.stringify({
            id: this._id,
            name: this._name,
            expansion: this._expansion,
            houseOne: {
                name: this._houseOne.name,
                path: this._houseOne.path
            },
            houseTwo: {
                name: this._houseTwo.name,
                path: this._houseTwo.path
            },
            houseThree: {
                name: this._houseThree.name,
                path: this._houseThree.path
            },
        });
    }

    /**
     * @private
     * @static
     * @function getExpansionName
     * @description Convert the expansion ID to the name of the expansion
     * @author J. Trpka
     * @param {number} id 
     * @returns {string}
     */
    private static getExpansionName = (id: number): string => {
        switch(id) {
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
}

/**
 * @class DeckHouse
 * @description Simple information of a single house of a deck
 * @author J. Trpka
 * @prop {string} name
 * @prop {string} path
 */
class DeckHouse {
    private _name: string;
    private _path: string;

    constructor(name: string, path: string) {
        this._name = name;
        this._path = path;
    }

    public get name() { return this._name; }
    public get path() { return this._path; }
}