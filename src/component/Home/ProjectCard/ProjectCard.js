import React, { useEffect } from 'react'
import './ProjectCard.css';
import PropTypes from "prop-types";
export default function ProjectCard({project}) {

 
    useEffect(() => {
        
 
    }, [project])

    return (
      <div className="projectCard col-md-6 col-lg-4">
          <figure className="projectCard__wrapper">
              <a href={"#"} target="_blank">
                  <img src={project ? project.image[0]: null} alt={""} className="projectCard__image"/>
              </a>
              <div className="projectCard__title">
              {project.title}
              </div>
              <div className="projectCard__title">
              {Date(project.startdate)}
              </div>
              <div className="projectCard__devtool">
                  {project.devstuff.map((image)=>(
                     <a href={"#"} target="_blank">
                     <img src={image} alt={""} className="projectCard__icon"/>
                 </a>
                  ))}
               

        
              </div>
              
              
          </figure>
      </div>
    )
}
