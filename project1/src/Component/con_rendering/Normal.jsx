import React from 'react'
import Con1 from './Con1.jsx';
import Con2 from './Con2.jsx';

const Normal = () => {
    const isLogginedIn = true;

    // if(isLogginedIn){
    //     return <Con1/>
    // }else{
    //     return <Con2/>
    // }
  return (
    <div>
      <h1>{isLogginedIn ? "Welcome User" : "Please Login"}</h1>
      <div>{isLogginedIn ? <Con1/> :<Con2/>}</div>
    </div>
  )
}

export default Normal
