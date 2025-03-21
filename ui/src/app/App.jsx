import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Maintenance from '../Maintenance/Maintenance'
import Home from '../Home/Home'
import Sites from '../Sites/Sites'
import SiteDetail from '../SiteDetail/SiteDetail';
import Conflicts from '../Conflicts/Conflicts'
import Submit from '../Submit/Submit'
import Navbar from '../Navbar/Navbar'

function App() {

  return (
    <>
      
      {/* JUST GETTING THE BASIC FILES READY */}
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home />}/>
        <Route path='/maintenance' element={<Maintenance />}/>
        <Route path='/sites' element={<Sites />} />
        <Route path="/sites/:id" element={<SiteDetail />} />
        <Route path='/conflicts' element={<Conflicts />} />
        <Route path='/submit' element={<Submit />} />
      </Routes>

      <div className='footer'>
        <h3>The Brookettes Project 3</h3>
        <p>Authors: Brooke Sharpenski, Harman Gidda, Kiersten Morrow, Andrew Stamps, Marques Johnson, Damon Hayes</p>
      </div>
    </>
  )
} {}

export default App
