import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const FoodCard = ({ item, cart, setCart }) => {
  const { setCartCount } = useContext(CartContext);

  function addToCart() {
    const updateCart = [...cart, item];
    setCart(updateCart);
    setCartCount(updateCart.length);
  }

  return (
    <div style={{ border: "2px solid #ccc", margin: 10, padding: 10,  }}>
      <h4>{item.name}</h4>
      <h5>{item.price}</h5>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default FoodCard;
