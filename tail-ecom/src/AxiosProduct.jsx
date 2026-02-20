import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosProduct = () => {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading)
    return <h1 className="text-center text-2xl mt-10">Loading...</h1>;
  if (error) return <h1 className="text-center text-red-500 mt-10">{error}</h1>;

  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6 shadow">
      {product.map((item) => (
        <div
          key={item.id}
          className="border p-4 rounded-xl shadow hover:shadow-lg transition"
        >
          <img
            src={item.image}
            alt=""
            className="h-52 mx-auto object-contain"
          />
          <h2 className="font-bold mt-2">{item.title.slice(0, 50)}...</h2>
          <h3 className="text-green-600 font-semibold mt-1">₹ {item.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default AxiosProduct;
