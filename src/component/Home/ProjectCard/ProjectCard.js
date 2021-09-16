import React, { useEffect, useState } from "react";
import "./ProjectCard.css";
import PropTypes from "prop-types";
export default function ProjectCard({ project }) {


  useEffect(() => {
   
  }, [project]);

  return (
    <div className="projectCard col-md-6 col-lg-4">
      <figure className="projectCard__wrapper">
        <a href={"#"} target="_blank">
          <img
            src={project ? project.image[0] : null}
            alt={""}
            className="projectCard__image"
          />
        </a>
        <div className="projectCard__contentBox">
        <div className="projectCard__title">
          <a className="projectCard__title__dic">
            프로젝트 명 : {project.title}{" "}
          </a>
        </div>
        <div className="projectCard__title">
          <a className="projectCard__title__dic">
            프로젝트 기간 : {project.startdate} ~ {project.completedate}{" "}
          </a>
        </div>
        <div className="projectCard__devtool">
          <div className="projectCard__devtool__one">
            <a className="projectCard__title__dic">개발 언어</a>
          </div>
          <div className="projectCard__devtool__two">
            {" "}
            {project.devstuff.map((image) => (
              <a href={"#"} target="_blank">
                <img src={image} alt={""} className="projectCard__icon" />
              </a>
            ))}
          </div>
        </div>
        </div>
      </figure>
    </div>
  );
}
