import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface ModeContextType {
  mode: 'light' | 'dark';
  setMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

// Create the context with an initial undefined value
const ModeContext = createContext<ModeContextType | undefined>(undefined);

// ModeProvider component that will provide the mode context to its children
export function ModeProvider({ children }: { readonly children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>(null);

  useEffect(() => {
    if (!mode) {
      const localMode = localStorage.getItem('theme');
      setMode(localMode);
    }
    else {
      setMode('light');
    }
  }, []);

  const toggleMode = (mode: ModeContextType) => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
  }

  if (!mode) {
    return null;
  }
  
  return (
      <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
        {children}
      </ModeContext.Provider>
  )
}

// Custom hook to use the mode context
export function useMode() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
}
