import { Routes, Route } from 'react-router-dom'
import './App.css'
import Maintenance from '../Maintenance/Maintenance'
import Home from '../Home/Home'
import Sites from '../Sites/Sites'
import SiteDetail from '../SiteDetail/SiteDetail';
import Conflicts from '../Conflicts/Conflicts'
import Submit from '../Submit/Submit'
import Navbar from '../Navbar/Navbar'
import NotFound from '../NotFound/NotFound'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/maintenance' element={<Maintenance />} />
        <Route path='/sites' element={<Sites />} />
        <Route path="/sites/:id" element={<SiteDetail />} />
        <Route path='/conflicts' element={<Conflicts />} />
        <Route path='/submit' element={<Submit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <div className='footer'>
        <h3>The Brookettes Project 3</h3>
        <h7 id="footerP">Authors: Brooke Sharpenski, Harman Gidda, Kiersten Morrow, Andrew Stamps, Marques Johnson, Damon Hayes</h7>
      </div>
    </>
  )
}

export default App