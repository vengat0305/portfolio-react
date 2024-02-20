import React from "react";
import "./Skills.css";
const Skills = () => {
  // code
  return (
    <skills className="skillsContainer">
      <div className="skillsTitle">
        <h2>Teck Stack</h2>
        <hr />
      </div>
      <div className="skillMain">
        <div className="content skillContent1">
          <i class="fa-brands fa-css3-alt"></i>
          <h3>HTML&CSS</h3>
          <p>
            Highly skilled in HTML & CSS, adeptly crafting visually appealing
            and responsive websites for optimal user experiences.
          </p>
        </div>
        <div className="content skillContent2">
          <i class="fa-brands fa-js"></i>
          <h3>Javascript</h3>
          <p>
            Expertise in JavaScript, building interactive and dynamic web
            applications with a focus on seamless user interactions and
            functionality
          </p>
        </div>
        <div className="content skillContent3">
          <i class="fa-brands fa-react"></i>
          <h3>React</h3>
          <p>
            Advanced proficiency in React, developing efficient and interactive
            front-end applications with a strong emphasis on component-based
            architecture.
          </p>
        </div>
      </div>
    </skills>
  );
};
export default Skills;
