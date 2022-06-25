import { createContext, useState, useEffect,useContext} from "react";

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
    //children demek component'in içindeki tüm componentleri buraya yerleştir. 
  );
};

export const useTheme = () => useContext(ThemeContext);

/*  Burada hem context'i oluştup hemde kullanmış oldu diğer componentlarda daha rahat kullanmak için yani diğer
componentlarda sadec import ederek kullabiliriz 

Context API, React çekirdeği içinde bulunan ve global state'i yönetmemizi sağlayan bir araçtır
*/




