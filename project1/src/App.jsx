import { useState } from "react";

import State from "./Component/Day_1/State";

// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <State/>
    </>
  );
}

export default App;
