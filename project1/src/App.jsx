import { useState } from "react";

import State from "./Component/Day_1/State";
import Prob1 from "./Component/Day_2/Prob1.jsx";
import Parent from "./Component/Day_2/Parent.jsx";
import Normal from "./Component/con_rendering/Normal.jsx";
import Logical from "./Component/con_rendering/Logical.jsx";

// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
   <Logical/>
    </>
  );
}

export default App;
