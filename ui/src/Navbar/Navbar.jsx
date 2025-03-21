import Reach from 'react';
import './Navbar.css'
import {useNavigate} from 'react-router-dom';

function Navbar(){
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <h4>TrackQ</h4>
      <ul>
        <li><button className="navbar-btn" onClick={() => handleNavigation('/')}>Home</button></li>
        <li><button className="navbar-btn" onClick={() => handleNavigation('/maintenance')}>Maintenance</button></li>
        <li><button className="navbar-btn" onClick={() => handleNavigation('/sites')}>Sites</button></li>
        <li><button className="navbar-btn" onClick={() => handleNavigation('/conflicts')}>Conflicts</button></li>
        <li><button className="navbar-btn" onClick={() => handleNavigation('/submit')}>Submit</button></li>
      </ul>
    </nav>
  )
}

export default Navbar;