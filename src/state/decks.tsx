import React from 'react';
import { Deck } from '../entities/keyforge/deck';

interface State {
    isLoading: boolean;
    decks: Deck[];
    error: string;
}

export enum Actions {
    RETRIEVE_DECK_PENDING = 'RETRIEVE_DECK_PENDING',
    RETRIEVE_DECK_SUCCESS = 'RETRIEVE_DECK_SUCCESS',
    RETRIEVE_DECK_FAIL = 'RETRIEVE_DECK_FAIL',
    RELOAD_DECKS = 'RELOAD_DECKS',
    CLEAR_DECKS = 'CLEAR_DECKS'
}

type Action = 
    | { type: Actions.RETRIEVE_DECK_PENDING; payload: null }
    | { type: Actions.RETRIEVE_DECK_SUCCESS; payload: Deck }
    | { type: Actions.RETRIEVE_DECK_FAIL; payload: string }
    | { type: Actions.RELOAD_DECKS; payload: Deck[] }
    | { type: Actions.CLEAR_DECKS; payload: null }



const initialState: State = {
    isLoading: false,
    decks: [],
    error: ''
};

/**
 * @function reducer
 * @description The reducer for the decks state management
 * @author J. Trpka
 * @returns {void}
 */
const reducer = (state: State, action: Action): State => {
    switch(action.type) {
        case Actions.RETRIEVE_DECK_PENDING:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case Actions.RETRIEVE_DECK_SUCCESS:
            return {
                ...state,
                decks: [...state.decks, action.payload],
                isLoading: false,
                error: ''
            };
        case Actions.RETRIEVE_DECK_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case Actions.RELOAD_DECKS:
            return {
                ...state,
                decks: action.payload
            }
        case Actions.CLEAR_DECKS:
            return {
                ...state,
                decks: []
            };
        default:
            return state;
    }
}

interface DecksContextProps {
    state: State;
    dispatch: React.Dispatch<Action>;
}

export const DecksContext = React.createContext<DecksContextProps | undefined>(undefined);

/**
 * @function DecksProvider
 * @description The main component that will house the decks state management
 * @author J. Trpka
 * @param {React.ReactNode} children
 * @returns {JSX.Element}
 */
const DecksProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <DecksContext.Provider value={{ state, dispatch }}>
            {children}
        </DecksContext.Provider>
    );
};

export default DecksProvider;