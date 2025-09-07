import React, {useContext} from 'react'
import { ThemeContext } from './ThemeContext'

const Navbar = () => {

    const{theme,toggleTheme} = useContext(ThemeContext)
  return (
    <nav style={{
        background:theme ==="light"? "#ddd": "#333",
        color: theme === "light" ? "#000" : "#fff",

    }}>
        <h1>My site</h1>
        <button onClick={toggleTheme}>Switch to</button>

    </nav>
  )
}

export default Navbar
