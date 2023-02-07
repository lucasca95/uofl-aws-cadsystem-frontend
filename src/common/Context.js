import { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

export const reducer = (state, action) => {
    switch (action.type) {
        case "setBackendURL":
            return {...state, backendURL: action.payload };
        case "setNeedToRegister":
            return {...state, needToRegister: action.payload };
        case "setUser":
            return {...state, user: action.payload };            
        case "clearContext":
            return { state: {} };
        default:
            return state;
    }
}

const persist = (reducer) => {
    return (state, action) => {
        const newState = reducer(state, action);
        localStorage.setItem("store", JSON.stringify(newState));
        return newState;
    };
};

UserContext.displayName = 'UserStore';

export const useStore = () => useContext(UserContext);

export const UserContextProvider = ({children}) => {
    const aux = true;
    const cache = localStorage.getItem("store");
    const initialState = cache ? JSON.parse(cache) : {};
    return (
        <UserContext.Provider value={useReducer(persist(reducer), initialState)}>
            {children}
        </UserContext.Provider>
    );
};