import { BrowserRouter as Router,Routes,Route,Link  } from "react-router-dom" 
import Navbar from "./Routing/Navbar"
import Home from "./Routing/Home"
import About from "./Routing/About"
import Contact from "./Routing/Contact"

const Allroutes = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home">Home</Route>
          <Route path="/about">About</Route>
          <Route paht="contact">Contact</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Allroutes
