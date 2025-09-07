import React from 'react'
import Child_1 from './Child_1'

const Child_2 = (props) => {
  return (
    <div>
      <Child_1 name = "Rupali" age = "22"/>
      <h1>I am a Child 2, My props is {props.data}</h1>
    </div>
  )
}

export default Child_2
