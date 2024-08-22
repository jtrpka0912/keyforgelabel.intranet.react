import React from "react";
import './counter.css';
import { DecksContext } from "../../state/decks";

/**
 * @function Counter
 * @description A counter to tell the user how many decks they can add to the sheet
 * @author J. Trpka
 * @returns {JSX.Element}
 */
const Counter = () => {
    const decksContext = React.useContext(DecksContext);
    if(!decksContext) return null;

    return (
        <div className="counter">
            <span>{decksContext.state.maxDecks - decksContext.state.decks.length}</span>
        </div>
    );
};

export default Counter;