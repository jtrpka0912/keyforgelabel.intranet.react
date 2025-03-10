import React from "react";
import Label from "../label/label";
import './page.css';
import { Actions, DecksContext } from "../../state/decks";
import { Deck } from "../../entities/keyforge/deck";

/**
 * @function Page
 * @description The sheet page of labels
 * @author J. Trpka
 * @returns {JSX.Element}
 */
const Page = () => {
    const decksContext = React.useContext(DecksContext);
    if(!decksContext) return null;

    React.useEffect(() => {
        const decksStorageString = localStorage.getItem('decks');

        if(decksStorageString) {
            const decksStorageArray: string[] = JSON.parse(decksStorageString);
            const decksArray: Deck[] = [];

            decksStorageArray.forEach((deckString) => {
                const deck = new Deck(deckString);

                if(decksContext.state.decks.findIndex((deckState) => deckState.id === deck.id) === -1) {
                    decksArray.push(deck);
                }
            });

            decksContext.dispatch({ type: Actions.RELOAD_DECKS, payload: decksArray });
        } // otherwise its empty
    }, []);

    return (
        <div className="page">
            <div className="page__labels">
                { decksContext.state.decks.map((deck: Deck) => {
                    return (
                        <Label key={deck.id} deck={deck} />
                    );
                }) }
            </div>
        </div>
    );
};

export default Page;