import { createContext, useState, useEffect } from "react";
import useThemeStore from "@/store/UseThemeStore";

export const ThemeChanger = createContext();

export const ThemeProvider = ({ children }) => {
  const stateTheme = useThemeStore((state) => state.theme);
  const setStateTheme = useThemeStore((state) => state.setTheme);
  const [theme, setTheme] = useState(stateTheme);
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const element = document.documentElement;

  const matchThemeWithSystemPreference = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };

  useEffect(() => {
    matchThemeWithSystemPreference();
  }, [darkQuery]);

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        matchThemeWithSystemPreference();
        break;
    }

    setStateTheme(theme);
  }, [theme, setStateTheme]);

  return (
    <ThemeChanger.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeChanger.Provider>
  );
};
