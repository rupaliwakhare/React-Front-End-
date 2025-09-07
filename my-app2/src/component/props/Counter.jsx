import React, { useState } from 'react'

import Child_1 from './Child_1'

const Counter = () => {
    // let data = "hello"
    // console.log(hello);
    const [data,setData] = useState("hello")

    function changefun () {
        setData = "bye"
    }
    
  return (
    <div>
      <h1>{data}</h1>
      <Child_1 age= "20"/>
      <button onClick={changefun}>Change to the Data</button>
    </div>
  )
}

export default Counter
