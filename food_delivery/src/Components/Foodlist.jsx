import React from 'react'
import foods from "../data.js"
import FoodCard from "../Components/FoodCard.jsx"

const Foodlist = () => {
  return (
    <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"20px"
    }}>
      {foods.map((food)=>(
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
}

export default Foodlist
