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

  var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
  var current = 0;
  document.addEventListener('keydown', keyHandler, false);

  var keyHandler = function (event) {
    console.log(event.key)
    // If the key isn't in the pattern, or isn't the current key in the pattern, reset
    if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
      current = 0;
      return;
    }
  
    // Update how much of the pattern is complete
    current++;
  
    // If complete, alert and reset
    if (pattern.length === current) {
      current = 0;
      window.alert('You found it!');
    }
  
  };

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
