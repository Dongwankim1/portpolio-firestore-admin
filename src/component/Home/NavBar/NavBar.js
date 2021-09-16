import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css';
export default function NavBar({active,setActive}) {
    
   

  

    return (
        <div className="navbar">
            <div className="navbar__active">
                {active}
            </div>
            <div className="navbar__items">
                
                {active !== "Projects" ? <div className="navbar__item" onClick={()=>setActive('Projects')}>Projects</div> :null}
               
            </div>
            
        </div>
    )
}
