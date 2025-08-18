import React,{useState}from "react";
const Todo = ()=>{
    const [text,setText] = useState("")
    const [todo,setTodo] = useState([])

    const handleAddTodo = ()=>{
        const newItem = {
            title:text,
            status:false,
            id:Math.floor(Math.random(11)*10000),
        };
        setTodo([...todo,newItem])
        console.log(todo);
        
    }
    // console.log(handleAddTodo);
    // handleAddTodo()
    
    return (
      <>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          placeholder="Enter your task"
        />
        <br />
        <button onClick={handleAddTodo}>Add</button>
        {/* Todo Item Component */}
        <div>
          <h1>Todo Items</h1>
          <ul>
            {todo.map((el)=>(
                <>
                <li key ={el.id}>{el.title} {"---->"}{el.status ? "Completed" : "Not Completed"}</li>
                </>
            ))}
          </ul>
        </div>
      </>
    );
    
   
}
export default Todo;