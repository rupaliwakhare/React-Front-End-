import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { CartProvider } from "./Context/CartContext";
import Foodlist from "./Components/Foodlist";


const FoodData = [
  { id: 1, name: "Pizza", price: 250 },
  { id: 2, name: "Burger", price: 120 },
  { id: 3, name: "Pasta", price: 180 },
  { id: 4, name: "Paratha", price: 100 },
];

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartProvider>
      <Navbar />
      <Foodlist FoodData={FoodData} cart={cart} setCart={setCart} />
    </CartProvider>
  );
}

export default App;
