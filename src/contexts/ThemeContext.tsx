import { createContext, ReactNode, useState } from "react";

interface ThemeProviderProps{
    children: ReactNode;
}

interface ThemeContextData {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
  }

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export function ThemeProvider({children}: ThemeProviderProps){
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    function toggleTheme(){
        setTheme(state => (state === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}