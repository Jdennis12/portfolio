import React from "react";
import LinkedIn from "@material-ui/icons/LinkedIn";
import '../styles/Footer.css'
import { IconButton } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="social-media">
        <IconButton>
      <a href="https://www.linkedin.com/in/jamison-dennis-974220186">
        <LinkedIn />
      </a>
        </IconButton>
      </div>
      <p>&copy; 2023 myportfolio.com</p>
    </div>
  );
}

export default Footer;
