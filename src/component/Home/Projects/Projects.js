import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
export default function Projects({projects}) {

    console.log(projects);

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
