import React from "react";
import Label from "../label/label";
import './page.css';
import { Actions, DecksContext } from "../../state/decks";
import { getDeck } from "../../api/keyforge";

const Page = () => {
    const decksContext = React.useContext(DecksContext);

    React.useEffect(() => {
        if(!decksContext) return;

        // If no decks in state then check local storage
        if(decksContext.state.decks.length === 0) {
            const localStorageString = localStorage.getItem('decks');

            if(!localStorageString) return;

            const localStorageArray: string[] = JSON.parse(localStorageString);

            for(const deckID of localStorageArray) {
                getDeck(deckID).then((deck) => {
                    decksContext.dispatch({
                        type: Actions.RETRIEVE_DECK_SUCCESS,
                        payload: deck
                    });
                }).catch((e) => {
                    decksContext.dispatch({
                        type: Actions.RETRIEVE_DECK_FAIL,
                        payload: e.getMessage()
                    });
                });
            }
        }
    }, [decksContext?.state.decks]);

    return (
        <div className="page">
            <div className="page__labels">
                <Label />
            </div>
        </div>
    );
};

export default Page;