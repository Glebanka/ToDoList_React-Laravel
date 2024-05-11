import{ createContext} from 'react';
// Определяем тип для данных контекста
export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}
// Создаем контекст для хранения текущей темы и функции для ее изменения
export default createContext<ThemeContextType | undefined>(undefined);
