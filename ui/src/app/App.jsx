import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Maintenance from '../Maintenance/Maintenance'
import Home from '../Home/home'
import Sites from '../Sites/Sites'
import Conflicts from '../Conflicts/Conflicts'
import Submit from '../Submit/Submit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* JUST GETTING THE BASIC FILES READY */}


      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/maintenance' element={<Maintenance />}/>
        <Route path='/sites' element={<Sites />} />
        <Route path='/conflicts' element={<Conflicts />} />
        <Route path='/submit' element={<Submit />} />
      </Routes>

      <div className='footer'>
        <h3>The Brookettes Project 3</h3>
        <p>Authors: Brooke Sharpenski, Harman Gidda, Kiersten Morrow, Andrew Stamps, Marques Johnson, Damon Hayes</p>
      </div>
    </>
  )
}

export default App
