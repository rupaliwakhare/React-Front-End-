import React from 'react'

const cart = ({cart}) => {

    let total = cart.reduce((sum,item)=>sum + item.price,0)
  return (
    <div>
      <h1>Cart Page</h1>
      {/* {console.log(cart)} */}
      {cart.map((item, i) => (
        <div key={i}>
          <p>{item.title}</p>
          <h2>Total : {}</h2>
        </div>
      ))}
    </div>
  );
}

export default cart
