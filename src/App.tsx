import { BrowserRouter } from "react-router-dom";
import { ThemeToggle } from "./components/ThemeToggle";
import { ItemProvider } from "./contexts/ItemContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";

export function App() {

  return (
    <ThemeContextProvider>
      <GlobalStyle/>
      <ThemeToggle />
      <ItemProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ItemProvider>
    </ThemeContextProvider>
  )
}
