
// export default Prob1;
import React, { useState, useEffect } from "react";

const Prob1 = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 5;

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const api = `https://resta-server.onrender.com/categories?_page=${page}&_limit=${limit}`;
      try {
        const res = await fetch(api);
        const data = await res.json();
        console.log("Fetched data:", data); 
        console.log(data);
        
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    }
    getData();
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Data fetch</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", margin:"30px 50px", }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "2px solid #ccc",
              padding: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={post.img}
              alt={post.name}
              style={{ width: "100%", height: "120px", objectFit: "cover" }}
            />
            <h3>{post.name}</h3>
            <p>₹{post.price}</p>
          </div>
        ))}
      </div>

      <br />
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Back
      </button>
      <span style={{ margin: "0 15px" }}>{page}</span>
      <button disabled={posts.length < limit} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Prob1;
