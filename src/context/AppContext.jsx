import React, { createContext, useReducer, useContext } from "react";

const AppContext = createContext();

export function AppProvider({ children, reducer, initialState }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppStore = () => useContext(AppContext);
