import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Navbar = () => {
  const { cartCount, setCartCount } = useContext(CartContext);

  return (
    <div style={{ padding: 10, background: "#ff6f00", color: "#fff" }}>
      <h3>Food Order</h3>
      <p>Cart Items : {cartCount} </p>
    </div>
  );
};

export default Navbar;
