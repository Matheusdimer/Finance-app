import { createContext, useState } from "react";
import themes from "./themes.json";

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);
  
  return (
    <ThemeContext.Provider value={theme} >
      { children }
    </ThemeContext.Provider>
  )
}
