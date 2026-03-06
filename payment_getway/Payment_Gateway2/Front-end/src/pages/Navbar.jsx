import React from 'react'
import {Link} from "react-router-dom"



const Navbar = () => {
  return (
    <div style={{display:"flex",gap:"20px",backgroundColor:"lightgray",padding:"10px"}}>
      <Link to="/">Products</Link>
      <Link to="/cart">Cart</Link>
    </div>
  )
}

export default Navbar
