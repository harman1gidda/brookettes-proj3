import { createElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInputEvent } from '../useInputEvent'
import "./home.css";
import {Link} from 'react-router-dom';
import Filler from "../assets/filler.jpg"
import Gears from "../assets/gears.png"
import Conflict from "../assets/conflict.png"
import Sites from "../assets/sites.png"

var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];

export default function Home(){
    const [count, setCount] = useState(0);
    const [success, setSuccess] = useState(false);
    const key = useInputEvent();
    
    useEffect(() =>{
        if (key == null) return;
        if (key !== pattern[count]) {
        setCount(0);
        return;
        }
  
        setCount((state) => state + 1);
        if (count + 1 === pattern.length) {
        setSuccess(true);
        }
    }, [key])

    if(success){
        return (
            <>
                <img src={Filler} className='Secret' />
            </>
    )}
    
    return (
        <>            
            <div className='NavContainer'>
                <div className='NavBar'>
                    <div className='button'>
                    <a href="/maintenance" className="iconLink">
                        <img src={Gears} alt="gears" />
                        <button className='iconButton'>Maintenance</button>
                    </a>
                    </div>
                    <div className='button'>
                    <a href="/sites" className="iconLink">
                        <img src={Sites} alt="sites" />
                        <button className='iconButton'>Sites</button>
                    </a>
                    </div>
                    <div className='button'>
                    <a href="/conflicts" className="iconLink">
                        <img src={Conflict} alt="conflicts" />
                        <button className='iconButton'>Conflicts</button>
                    </a>                        
                    </div>
                </div>
                <div className='SubmitBar'>
                    <div className='button' id="submitButton">
                            <button><Link to={"/submit"}>Submit New Request</Link></button>
                    </div>
                </div>
            </div>
            
        </>
    )
}