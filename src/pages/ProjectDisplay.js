import React from "react";
import "../styles/ProjectDisplay.css";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import { IconButton } from "@material-ui/core";

import { GitHub } from "@material-ui/icons";
function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="project" />
      <p>Live demo</p>
      <video src={project.video} autoPlay loop muted />
      <p>
        <b>Skills used to create this project: </b>
        {project.skills}
      </p>

      <IconButton>
        <a href={project.link}>
          <GitHub />
        </a>
      </IconButton>
    </div>
  );
}

export default ProjectDisplay;
