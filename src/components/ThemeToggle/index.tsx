import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export function ThemeToggle(){
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>
            Alternar para {theme.mode === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    );
}