import { DeckResponse } from "../models/keyforge/deck-response";

const baseURL: string = 'https://www.keyforgegame.com/api';

/**
 * @async
 * @function getDeck
 * @description Retrieve a Keyforge deck from the master vault
 * @author J. Trpka
 * @param {string} id 
 * @returns {Promise<DeckResponse>}
 */
export const getDeck = async (id: string): Promise<DeckResponse> => {
    const response: Response = await fetch(`${baseURL}/decks/v2/${id}`);

    if(response.status !== 200) throw new Error('Unable to retrieve deck information');

    const json: DeckResponse = await response.json();

    return json;
}