import React from 'react'
import ChildA from './ChildA.jsx'
import ChildB from './ChildB.jsx'

const Parent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildA name="Ruaa" age={23}/>
      <ChildB ed="Graduation"/>
      <ChildA name="Rupa" age={21}/>
      
    </div>
  )
}

export default Parent
