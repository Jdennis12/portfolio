import React from "react";
import '../styles/Experience.css'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2020"
          iconStyle={{ background: "#3e497a", color: "fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Albany State University
          </h3>
          <p>Bachelor's of Science</p>
        </VerticalTimelineElement>
       
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2023"
          iconStyle={{ background: "#e9d35b", color: "fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Tata Consultancy Services
          </h3>
          <p>Atlanta, Ga</p>
            <p>Full Stack Developer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
