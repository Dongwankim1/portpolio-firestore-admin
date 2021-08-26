import React,{useState} from 'react'
import './NavBar.css';
export default function NavBar() {
    
    const [active,setActive] = useState('About');

    return (
        <div className="navbar">
            <div className="navbar__active">
                {active}
            </div>
            <div className="navbar__items">
                {active !== 'About' &&
                <div className="navbar__item" onClick={()=>setActive('About')}>About</div>
                }
                {active !== "Resume" ? <div className="navbar__item" onClick={()=>setActive('Resume')}>Resume</div> :null}
                {active !== "Projects" ?  <div className="navbar__item" onClick={()=>setActive('Projects')}>Projects</div> :null}
               
            </div>
            
        </div>
    )
}
