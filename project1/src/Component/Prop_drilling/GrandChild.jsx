import React from 'react'

const GrandChild = (props) => {
  return (
    <div>
      <h1>Grand Child</h1>
      <h2>{props.message}</h2>
    </div>
  )
}

export default GrandChild
