import React, { useState } from "react";
import axios from "axios";
import Navbar from "./pages/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products.jsx";
import Cart from "./pages/cart.jsx";

const App = () => {
  const [cart, setCart] = useState([]); 

  return (
    <BrowserRouter>
      <Navbar cart={cart} />

      <Routes>
        <Route path="/" element={<Products cart={cart} setCart={setCart} />} />

        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
