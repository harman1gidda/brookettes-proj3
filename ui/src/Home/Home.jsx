import { createElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./home.css";
import {Link} from 'react-router-dom';

export default function Home(){
    return (
        <>
            {/* <h1 className='header'>HOME PAGE</h1> */}
            <div className='NavContainer'>
                <div className='NavBar'>
                    <div className='button'>
                        <button><Link to={"/maintenance"}>Maintenance</Link></button>
                    </div>
                    <div className='button'>
                        <button><Link to={"/sites"}>Sites</Link></button>
                    </div>
                    <div className='button'>
                        <button><Link to={"/conflicts"}>Conflicts</Link></button>
                    </div>
                </div>
                <div className='SubmitBar'>
                    <div className='button'>
                            <button><Link to={"/submit"}>Submit New Request</Link></button>
                    </div>
                </div>
            </div>
            
        </>
    )
}