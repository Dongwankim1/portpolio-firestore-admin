import React, { useEffect } from 'react'
import './ProjectCard.css';
export default function ProjectCard({project}) {

    console.log('asfasf',project)
    useEffect(() => {
        
    console.log('asfasf',project)
    }, [project])

    return (
      <div className="projectCard col-md-6 col-lg-4">
          <figure className="projectCard__wrapper">
              <a href={"#"} target="_blank">
                  <img src={project ? project.image[0]: null} alt={""} className="projectCard__image"/>
              </a>
              <div className="projectCard__title">
              <a href={"#"} target="_blank">
                  <img src={project ? project.image[0]: null} alt={""} className="projectCard__icon"/>
              </a>

              {project.title}
              </div>
          </figure>
      </div>
    )
}
