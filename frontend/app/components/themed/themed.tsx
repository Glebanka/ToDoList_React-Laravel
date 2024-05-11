import {useContext, useState, createContext} from 'react';
import ThemeProvider from '../providers/themeprovider';
import ThemeContext from "../contexts/themecontext";
import ThemeContextType from "../contexts/themecontext";

// Компонент, который использует текущую тему из контекста

export default function ThemedComponent() {
  const { theme, toggleTheme } : ThemeContextType = useContext(ThemeContext);
  
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={{ backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
        Текущая тема: {theme}
      </div>
    </div>
  );
};