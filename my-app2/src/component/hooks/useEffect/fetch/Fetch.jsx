import React, { useState, useEffect } from "react";

const Fetch = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  let limit = 5;
  const api = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`;

  useEffect(() => {
    async function getData() {
      setLoading(true);
      let res = await fetch(api);
      let data = await res.json();
      setPosts(data);
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
      <div>
        {posts.map((post) => (
          <div style={{ border: "5px solid", margin: "20px" }} key={post.id}>
            <h2>{post.title}</h2>
          </div>
        ))}
      </div>

      <br />
      <br />

      {/* Back Button */}
      <button
        disabled={page === 1} 
        onClick={() => setPage(page - 1)}
      >
        Back
      </button>

      <span style={{ margin: "0 15px" }}>{page}</span>

      {/* Next Button */}
      <button
        disabled={posts.length < limit} 
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Fetch;
