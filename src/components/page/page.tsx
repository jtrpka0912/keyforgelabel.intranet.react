import React from "react";
import Label from "../label/label";
import './page.css';
import { DecksContext } from "../../state/decks";
import { DeckResponse } from "../../models/keyforge/deck-response";

const Page = () => {
    const decksContext = React.useContext(DecksContext);
    if(!decksContext) return null;

    return (
        <div className="page">
            <div className="page__labels">
                { decksContext.state.decks.map((deck: DeckResponse) => {
                    return (
                        <Label key={deck.data.id} deck={deck} />
                    );
                }) }
            </div>
        </div>
    );
};

export default Page;