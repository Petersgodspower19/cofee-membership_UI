import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const initialState = {
    isSideBarShowing: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "OPEN":
            return { ...state, isSideBarShowing: true };
        case "CLOSE":
            return { ...state, isSideBarShowing: false };
        default:
            return state;
    }
}

function ContextProvider({ children }) {
    const [{ isSideBarShowing }, dispatch] = useReducer(reducer, initialState);
    return (
        <AppContext.Provider value={{ isSideBarShowing, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}

const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useAppContext must be used within a ContextProvider");
    }
    return context;
};

export { ContextProvider, useAppContext };
