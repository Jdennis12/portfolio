import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import { IconButton } from "@material-ui/core";

import "../styles/Home.css";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Welcome to my portfolio!</h2>
        <h3> My name is Jamison</h3>
        <div className="prompt">
          <p>Full stack engineer with a passion for learning</p>
          <IconButton>
            <a href="https://www.linkedin.com/in/jamison-dennis-974220186">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/Jdennis12">
              <GitHubIcon />
            </a>
            <a href="mailto:jamisondennis7@gmail.com">
              <EmailIcon />
            </a>
          </IconButton>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              JavaScript | React.js | jQuery | Angular | TypeScript | CSS3 |
              HTML5 | Bootstrap
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              JavaScript | Node.js | Express.js | Nest.js | Java | Spring Boot |
              Python | Django | Go | MySQL | PostgreSQL | MongoDB/Mongoose
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Java | Python | JavaScript | TypeScript | Go </span>
          </li>
          <li className="item">
            <h2>Tools</h2>
            <span>
              Git | APIs | REST | Testing | Agile/Scrum | Debugging | CI/CD |
              Containerization (Docker, Kubernetes)
            </span>
          </li>
          <li className="item">
            <h2>Certifications</h2>
            <span>
              AWS Certified Cloud Practitioner | Google Cloud Platform Associate
              Engineer
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
