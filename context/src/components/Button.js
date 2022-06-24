import { useContext } from "react"; // context'i kullanırken

import ThemeContext from "../context/ThemeContext";  // context'in kendisi

function Button() {
  const {theme,setTheme} = useContext(ThemeContext); //Theme context verisine erişir.
  

  return( 
  <div>
    Active theme : {theme} <br />

    <button onClick={() => setTheme(theme ==='light' ? 'dark' : 'light') }> Change</button>
    
    </div>);
}

export default Button;
