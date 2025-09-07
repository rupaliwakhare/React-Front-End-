import React from "react"
import { Link } from "react-router-dom";
const Navbar =()=>{
return (
  <nav>
    <ul>
      <Link to="/">
        <img
          src="https://img.freepik.com/free-vector/phoenix-silhouette-logo-template_1195-4.jpg?ga=GA1.1.1966136197.1746208324&semt=ais_hybrid&w=740&q=80"
          alt="logoimage"
        />
      </Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
    </ul>
  </nav>
);
}
export default Navbar;