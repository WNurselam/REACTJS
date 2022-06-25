import {useTheme} from "../context/ThemeContext";  // context'in kendisi

function Header() {

  const {theme,setTheme} = useTheme();
  return (
  <div>
       Active Theme: {theme} <br />

       <button onClick={()=> setTheme(theme === 'dark' ? 'light':'dark')}>Change</button>
  </div>
  );
}

export default Header;
