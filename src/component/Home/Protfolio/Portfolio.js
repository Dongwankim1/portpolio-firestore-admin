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
        firebase.firestore().collection("tb_plang").get()
            .then((snap)=>{
                let plang ="";
                snap.forEach((doc)=>{
                    plang = doc.data()
                })
                
                firebase.firestore()
                .collection("tb_project")
                .get()
                .then((snap)=>{
                    const data = [];
                    let copied = null ;
                    snap.forEach((doc)=>{
                        copied = Object.assign({},doc.data())
                        for(let i=0;i<doc.data().devstuff.length;i++){
                            copied.devstuff[i] = plang.planglist[doc.data().devstuff[i]]
                            
                        }
      
                        data.push(copied)
                    
                    })
                    setProjects(data);
                    
        
                })

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
