import { ItemForm } from "./components/ItemForm";
import { ItemList } from "./components/ItemList";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyle/>
      <ThemeToggle />
      <ItemForm />
      <ItemList />
    </ThemeContextProvider>
  )
}
