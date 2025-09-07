import React, { useContext } from 'react'
import MyContext from './MyContext'
const cart = () => {
    let cart = useContext(MyContext)
  return (
    <div>
      <h1>cart value, {cart}</h1>
    </div>
  )
}

export default cart
