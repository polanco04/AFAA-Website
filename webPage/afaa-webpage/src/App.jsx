import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './css/App.css'
import NavBar from './components/NavBar'
import AboutTheGame from './pages/AboutTheGame'
import AboutUs from './pages/AboutUs'
import Progress from './pages/Progress'
import Home from './pages/Home'

function App() {
  //const [count, setCount] = useState(0)
  return (
    <>
      <NavBar />      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About-Us" element={<AboutUs />}></Route>
        <Route path="/About-the-Game" element={<AboutTheGame />}></Route>
        <Route path="/Progress" element={<Progress />}></Route>
      </Routes>
    </>
  );
}

export default App;
