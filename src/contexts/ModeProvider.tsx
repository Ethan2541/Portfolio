import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

interface ModeContextType {
  mode: 'light' | 'dark';
  setMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

// Create the context with an initial undefined value
const ModeContext = createContext<ModeContextType | undefined>(undefined);

// ModeProvider component that will provide the mode context to its children
export function ModeProvider({ children }: { readonly children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  return useMemo(() => (
      <ModeContext.Provider value={{ mode, setMode }}>
        {children}
      </ModeContext.Provider>
    ), [mode, setMode]);
}

// Custom hook to use the mode context
export function useMode() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
}
