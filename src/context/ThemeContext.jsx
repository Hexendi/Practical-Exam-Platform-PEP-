import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

  const [isLight, setIsLight] = useState(() =>
    document.body.classList.contains("light")
  );

  const toggleTheme = () => {
    const next = !isLight;

    setIsLight(next);

    document.body.classList.toggle("light", next);

    localStorage.setItem(
      "theme",
      next ? "light" : "dark"
    );
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "light") {
      setIsLight(true);
      document.body.classList.add("light");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{ isLight, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () =>
  useContext(ThemeContext);
