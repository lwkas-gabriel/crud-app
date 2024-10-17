import { createContext, ReactNode, useState } from "react";
import { dark, light, ThemeType } from "../styles/themes/defaultTheme";
import { ThemeProvider } from "styled-components";

interface ThemeProviderProps{
    children: ReactNode;
}

interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
  }

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export function ThemeContextProvider({children}: ThemeProviderProps){
    const [theme, setTheme] = useState<ThemeType>(dark);

    function toggleTheme(){
        setTheme(state => (state.mode === 'light' ? dark : light));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
}