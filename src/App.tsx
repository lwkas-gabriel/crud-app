import { ItemForm } from "./components/ItemForm";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyle/>
      <ThemeToggle />
      <ItemForm />
    </ThemeContextProvider>
  )
}
