import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext.jsx";

const FoodCard = ({ food }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
        src={food.image}
        alt={food.name}
      />

      <h3>{food.name}</h3>
      <p>₹{food.price}</p>

      <button onClick={() => addToCart(food)}>Add To Cart</button>
    </div>
  );
};

export default FoodCard;
