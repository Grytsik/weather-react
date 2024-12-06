import React, { createContext, FC, useContext } from 'react';
import useGlobal from './useGlobal';
import { LocationData, WeatherData } from '../types/types';

interface ContextProviderProps {
  children?:React.ReactNode;
}

interface GlobalContextType {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  location: LocationData | null;
  forecast: WeatherData[];
  icon: string;
  loading: boolean;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);


export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('error context');
  }
  return context;
};

export const GlobalContextProvider:FC<ContextProviderProps> = ({ children }) => {
  const globalState = useGlobal();

  return (
    <GlobalContext.Provider value={globalState}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
