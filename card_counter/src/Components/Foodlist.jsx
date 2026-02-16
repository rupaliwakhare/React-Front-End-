import React from "react";
import FoodCard from "./FoodCard";

const Foodlist = ({ FoodData, cart, setCart }) => {
  return (
    <div>
      {FoodData.map((item) => (
        <FoodCard key={item.id} item={item} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
};

export default Foodlist;
