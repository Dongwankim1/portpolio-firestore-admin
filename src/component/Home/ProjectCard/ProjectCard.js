import React, { useEffect, useState } from "react";
import "./ProjectCard.css";
import PropTypes from "prop-types";
export default function ProjectCard({ project }) {
  const [startdate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    let date = new Date(project.startdate);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    setStartDate(`${year}/${month}/${day}`);
    let date1 = new Date(project.completedate);
    const year1 = date.getFullYear();
    const month1 = date.getMonth();
    const day1 = date.getDay();
    setEndDate(`${year1}/${month1}/${day1}`);
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
            프로젝트 기간 : {startdate} ~ {endDate}{" "}
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
