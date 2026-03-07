import { useState, useEffect } from "react";
import axios from "axios";

const Products = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (Products) => {
    setCart([...cart, Products]);
  };

  return (
    <div>
      <h1>Products Page</h1>

      {products.map((p) => (
        <div key={p.id}>
          <img src={p.image} alt={p.title} width="120" />
          <h3>{p.title}</h3>
          <h4>${p.price}</h4>
          <button onClick={() => addToCart(p)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
