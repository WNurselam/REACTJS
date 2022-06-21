import {useContext} from 'react' // context'i kullanırken

import ThemeContext from '../context/ThemeContext'


function Button() {
    const data = useContext(ThemeContext);   //Theme context verisine erişir.
    console.log(data);
  return (
    <div>Button ({data})
    
    
    </div>

  )
}

export default Button