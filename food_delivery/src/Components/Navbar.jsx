import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext';
import { CartContext } from '../Context/CartContext';

const Navbar = () => {

    const {theme,toggleTheme} = useContext(ThemeContext);
    const {cart} = useContext(CartContext)
  return (
    <div
      style={{
        padding: "10px",
        background: theme === "light" ? "black" : "white",
        color: theme === "light" ? "white" : "black",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        border: "2px solid light-gray",
        marginBottom:"10px"
      }}
    >
      <h2 style={{ color: "pink" }}>
        Zaika
        <span style={{ color: "pink" }}>Zone</span>
      </h2>

      <div style={{
        width:"500px",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center"

      }}>

        <h1>Cart:{cart.length}</h1>
        <button onClick={toggleTheme}
        style={{height:"50px",width:"200px", borderRadius:"15px"}}>
            {theme==="light"?"Light theme":"Dark theme"}
        </button>
       
      </div>
    </div>
  );
}

export default Navbar
