import React, {createContext, useContext, useReducer} from "react";

// Prepare the Data Layer
export const StateContext = createContext();

// Wraps our app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information form the Data Layer
export const useStateValue = () => useContext(StateContext);