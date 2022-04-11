import { createContext, useState } from "react";

export const ThemeContext = createContext(false);

export const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const toggleTheme = () => {
    setToggle(!toggle);
  };

  return (
    <ThemeContext.Provider value={{ toggle, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
