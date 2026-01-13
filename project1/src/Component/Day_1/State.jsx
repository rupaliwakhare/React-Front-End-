import React from 'react'

let count = 0

function IncFun(){
    count++;
    console.log(count);
    
}

const State = () => {
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={IncFun}>Click</button>
      <h1>State</h1>
      <h3>Kind of variable to store, manage and change the data</h3>
      <p>
        In React, state is a built-in mechanism taht allows components to manage, store, and track data that changes over time, typically due to user interactions or network responses.
      </p>
    </div>
  )
}

export default State
