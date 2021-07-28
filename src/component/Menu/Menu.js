import React from 'react'
import './Menu.css'
export default function Menu({menuOpen,setMenuOpen,user}) {
    return user ? ( <div className={"menu " + (menuOpen && "active")} >
    <ul>
        <li onClick={()=>setMenuOpen(false)}><a className="menuitem" href="#intro">1</a></li>
    </ul>
    <ul>
        <li onClick={()=>setMenuOpen(false)}><a className="menuitem"  href="#portfolio">2</a></li>
    </ul>
    <ul>
        <li onClick={()=>setMenuOpen(false)}><a className="menuitem"  href="#works">3</a></li>
    </ul>
    <ul>
        <li onClick={()=>setMenuOpen(false)}><a className="menuitem"  href="#testimonials">4</a></li>
    </ul>
    <ul>
        <li onClick={()=>setMenuOpen(false)}><a className="menuitem"  href="#contact">5</a></li>
    </ul>
</div>):(
        <div className={"menu " + (menuOpen && "active")} >
            <ul>
                <li onClick={()=>setMenuOpen(false)}><a className="menuitem" href="#intro">Home</a></li>
            </ul>
            <ul>
                <li onClick={()=>setMenuOpen(false)}><a className="menuitem"  href="#portfolio">Portfolio</a></li>
            </ul>
            <ul>
                <li onClick={()=>setMenuOpen(false)}><a className="menuitem"  href="#works">Works</a></li>
            </ul>
            <ul>
                <li onClick={()=>setMenuOpen(false)}><a className="menuitem"  href="#testimonials">Testimonials</a></li>
            </ul>
            <ul>
                <li onClick={()=>setMenuOpen(false)}><a className="menuitem"  href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}
