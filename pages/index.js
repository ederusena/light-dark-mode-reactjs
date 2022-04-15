import Form from "../components/Form";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export default function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <Form />
      </div>
    </ThemeContext.Provider>
  )
}
