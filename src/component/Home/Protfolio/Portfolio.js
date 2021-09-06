import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import './Portfolio.css'

import About from '../About/About';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import firebase from 'firebase';
import { useEffect } from 'react';
export default function Portfolio() {

    const [active,setActive] = useState('Projects');
    const [projects,setProjects] = useState([]);
    useEffect(()=>{
        firebase.firestore()
        .collection("tb_project")
        .get()
        .then((snap)=>{
            const data = [];
            snap.forEach((doc)=>{
                console.log(doc.data());
                data.push(doc.data())
            
            })
            setProjects(data);
        })
        
    },[])


    return (

        <div className="Portfolio">
                <div className="PortfolioContainer">
                 <NavBar active={active} setActive={setActive}/>
                
                    {active === "About" ? <About/> : null}
                    {active === "Resume" ? <Resume/> : null}
                    {active === "Projects" ? <Projects projects={projects}/> : null}
              
                </div>
        </div>

    )
}
