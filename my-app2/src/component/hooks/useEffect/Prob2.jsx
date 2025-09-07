import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const limit = 5;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Start loading
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        const start = (page - 1) * limit;
        const paginated = data.slice(start, start + limit);

        setProducts(paginated);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchProducts();
  }, [page]);

  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛍️ Products (Page {page})</h2>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px",marginLeft:"40px",textAlign:"center" }}>
          {products.map((prod) => (
            <div
              key={prod.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                width: "200px",
              }}
            >
              <img
                src={prod.image}
                alt={prod.title}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
              <h4 style={{ fontSize: "16px" }}>{prod.title}</h4>
              <p style={{ fontWeight: "bold" }}>₹{prod.price}</p>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <button onClick={handlePrev} disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNext} style={{ marginLeft: "10px" }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
