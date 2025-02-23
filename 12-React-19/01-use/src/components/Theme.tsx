import { createContext, ReactNode, useContext, useState } from "react";
import Card from "./Card";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toogleTheme: () => void;
}

export const ThemeContex = createContext<ThemeContextType | undefined>(
  undefined
);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toogleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContex.Provider value={{ theme, toogleTheme }}>
      {children}
    </ThemeContex.Provider>
  );
};

const Theme = () => {
  return (
    <ThemeProvider>
      <Card />
    </ThemeProvider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContex);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default Theme;
