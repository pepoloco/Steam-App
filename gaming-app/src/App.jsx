import Home from "./Pages/Home"
import Header from "./Components/Header"
import { useState } from "react"
import { ThemeContext } from "./Context/ThemeContext"

function App() {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} ${theme == 'dark' ? "bg-[#121212]" : null} h-[100vh]`}>
        < Header />
        <Home />
      </ div >
    </ThemeContext.Provider>
  )
}

export default App
