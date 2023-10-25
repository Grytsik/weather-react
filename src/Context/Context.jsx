import React, { createContext, useContext } from 'react';
import useGlobal from './useGlobal';

export const GlobalContext = createContext(null);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('error context');
  }
  return context;
};

const GlobalContextProvider = ({ children }) => (
  <GlobalContext.Provider value={useGlobal()}>{children}</GlobalContext.Provider>
);

export default GlobalContextProvider;
