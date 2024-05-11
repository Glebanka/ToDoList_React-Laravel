import{ useState, ReactNode } from 'react';
import ThemeContext from "../contexts/themecontext";
interface ThemeProviderProps {
  children: ReactNode;
}
// Компонент-провайдер, который предоставляет текущую тему и функцию для ее изменения через контекст
export default function ThemeProvider({ children }: ThemeProviderProps){
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
  </ThemeContext.Provider>
);
};