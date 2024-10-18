import { FilterBar } from "./components/FilterBar";
import { ItemForm } from "./components/ItemForm";
import { ItemList } from "./components/ItemList";
import { ThemeToggle } from "./components/ThemeToggle";
import { ItemProvider } from "./contexts/ItemContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <ThemeContextProvider>
      <GlobalStyle/>
      <ThemeToggle />
      <ItemProvider>
        <ItemForm />
        <FilterBar />
        <ItemList/>  
      </ItemProvider>
    </ThemeContextProvider>
  )
}
