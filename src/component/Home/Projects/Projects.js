import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import './Projects.css'
export default function Projects({projects}) {

 

    return (
     <div className="container projects">
         <div className="row">
             {
                 projects ? projects.map((project) =>(
                    <ProjectCard key={project.title} project={project}/>   
                 )): null
             }
         </div>
     </div>
    )
}
