// src/stores/AppStore.js

import React, { createContext, useContext, useState } from "react";

const AppStoreContext = createContext();

const initialState = {
  // Define your initial state properties relevant to your trading simulator here.
};

export function AppStoreProvider({ children }) {
  const [state, setState] = useState(initialState);

  const actions = {};

  return (
    <AppStoreContext.Provider value={{ state, actions }}>
      {children}
    </AppStoreContext.Provider>
  );
}

export function useAppStore() {
  const context = useContext(AppStoreContext);
  if (!context) {
    throw new Error("useAppStore must be used within an AppStoreProvider");
  }
  return context;
}
