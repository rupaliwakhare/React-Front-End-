import React from 'react'

const Logical = () => {
    const showMessage = true;
  return (
    <div>
      {showMessage && <h1>Hello React</h1>}
    </div>
  )
}

export default Logical;
