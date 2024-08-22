import React from "react";
import './clear-button.css';
import {Actions, DecksContext} from '../../state/decks';

const ClearButton = () => {
    const decksContext = React.useContext(DecksContext);
    if(!decksContext) return null;
    if(decksContext.state.decks.length === 0) return null;

    const handleOnClickClear = () => {
        decksContext.dispatch({type: Actions.CLEAR_DECKS});
        localStorage.removeItem('decks');
    }

    return (
        <button className="clear-button" onClick={handleOnClickClear}>Clear</button>
    );
};

export default ClearButton;