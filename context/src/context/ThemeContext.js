import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext(); // Contexti oluşturduk

export const ThemeProvider = ({ children }) => {  
  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light'); // lstorage değer yoksa light yapsın

  useEffect(() =>{
    localStorage.setItem("theme",theme) // theme verisini local storage'a attık.

  },[theme])


  const values = {
    theme,
    setTheme,
  };

  
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;

// Burada context kullanıp dışarı aktardık
