import { useState } from "react";

import State from "./Component/Day_1/State";
import Prob1 from "./Component/Day_2/Prob1.jsx";
import Parent from "./Component/Day_2/Parent.jsx";

// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Prob1/>
    <hr />
<Parent/>
    </>
  );
}

export default App;
