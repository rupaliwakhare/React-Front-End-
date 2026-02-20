import React, { useState, useEffect } from "react";

const FetchProduct = () => {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");

      if (!res.ok) throw new Error("Network response failed");

      const data = await res.json();
      setProducts(data);
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
    <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6">
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

export default FetchProduct;
