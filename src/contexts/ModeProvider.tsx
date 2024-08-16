import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import Loader from '@/components/Loader';

interface ModeContextType {
  mode: 'light' | 'dark';
  setMode: React.Dispatch<React.SetStateAction<'light' | 'dark' | null>>;
  toggleMode: (mode: string) => void;
}

// Create the context with an initial undefined value
const ModeContext = createContext<ModeContextType | undefined>(undefined);

// ModeProvider component that will provide the mode context to its children
export function ModeProvider({ children }: { readonly children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    if (!mode) {
      const localMode = localStorage.getItem('theme');
      localMode === 'light' ? setMode("light") : setMode("dark");
    }
    else {
      setMode('light');
    }
  }, []);

  const toggleMode = (mode: string) => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
  }

  if (!mode) {
    return <Loader />;
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
