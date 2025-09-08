
import React,{useContext} from 'react'
import ThemeContext from './ThemeContext'

const Navbar = () => {
  const [theme,toggleTheme] = useContext(ThemeContext);
  return (
   <nav 
   style={{
    background:theme === "light" ? "#fff" :"#000",
    color:theme === "light" ? "#000" : "#fff"
   }}>
    <h1>
      Hello
    </h1>
    <button onClick={toggleTheme}>
      Switch {theme === "light" ? "Dark" :"light"}</button>
   </nav>
  );
};

export default Navbar
