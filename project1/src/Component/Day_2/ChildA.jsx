import React from "react";
import ChildB from "./ChildB";

const ChildA = (props) => {
  return (
    <div>
      <h1>ChildA</h1>
      {console.log(props.name)}
      {console.log(props.age)}
      <h3>Name : {props.name}</h3>
      <p>Age : {props.age}</p>
      <ChildB ed="BSC"/>
    </div>
  );
};

export default ChildA;
