import React,{useRef,useState} from "react";
const Counter =()=>{
    const CountRef= useRef(0)
    const[show, setShow] = useState(false);
    const[count,setCount] = useState(0);
    console.log(CountRef);
    
    const increase=()=>{
        console.log("hello");
        CountRef.current +=1;
        console.log(CountRef.current);
        
        
    }

    return(
     <div>
    <h2>UseRef Exmpale</h2>

    <h3>Counter(stored in ref) :{CountRef.current}</h3>
    <button onClick={increase}>Increase</button>
    <button onClick={()=>setShow(!show)}>Rerender</button>

    <hr /><hr />
    
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Counter</button>
   </div>
    );
};
 export default Counter;
