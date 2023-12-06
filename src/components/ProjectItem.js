import React from "react";
import { useNavigate } from "react-router-dom";
function ProjectItem({ image, name, id }) {
  const nagivate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        nagivate("/project/" + id);
      }}
    >
      <div className="bgImage" style={{ backgroundImage: `url(${image})` }} />
      <h1>{name}</h1>
    </div>
  );
}

export default ProjectItem;
