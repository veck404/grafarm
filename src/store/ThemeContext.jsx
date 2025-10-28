import { createContext, useContext, useEffect, useState } from "react";

const ThemeCtx = createContext({ isDark: false, toggle: () => {} });

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    // prefer system by default
    return (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggle = () => setIsDark((d) => !d);

  return (
    <ThemeCtx.Provider value={{ isDark, toggle }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeCtx);
}
