import './App.css';
import Container from './components/Container';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';




function App() {
  return (
    <ThemeProvider>
      <UserProvider>
       <Container/>
       </UserProvider>
    </ThemeProvider>
  );
}

export default App;


//ThemeContext.Provider child componentine provide(sağlanan) bütün dataları göndeririz.

