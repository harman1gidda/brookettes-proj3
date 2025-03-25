import { createContext, useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export const ThemeContext = createContext();

export function Theme({ children }) {
  //const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [mode, setMode] = useState(false);

  const handleChange = () => {
    if (mode){
      setMode(false);
    }else{
      setMode(true);
    }
    console.log('Current mode:', mode)
  }

  const appTheme = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light', 
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, handleChange }}>
      <ThemeProvider theme={appTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}