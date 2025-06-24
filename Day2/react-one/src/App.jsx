import Demo from "./components/Demo"
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"

function App() {
  // let name = "Wasi"



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
