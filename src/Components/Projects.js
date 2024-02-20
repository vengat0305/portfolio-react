import React from "react";
import "./Projects.css";
const Projects = () => {
  // Code
  return (
    <projects Creations className="projectsContainer">
      <div className="projectsTitle">
        <h2>Web Creations</h2>
        <hr />
      </div>
      <div className="projectsMain">
        <div className="content projectsContent1">
          <img
            src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="#"
          />
          <div className="details">
            <h3>First Project</h3>
            <p>
              Highly skilled in HTML & CSS, adeptly crafting visually appealing
              and responsive websites for optimal user experiences.
            </p>
            <div className="projectIcon">
              <i class="fa-solid fa-globe"></i>
              <i class="fa-brands fa-github-alt"></i>
            </div>
          </div>
        </div>
        <div className="content projectsContent2">
          <img
            src="https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="#"
          />
          <div className="details">
            <h3>Second Project</h3>
            <p>
              Expertise in JavaScript, building interactive and dynamic web
              applications with a focus on seamless user interactions and
              functionality
            </p>
            <div className="projectIcon">
              <i class="fa-solid fa-globe"></i>
              <i class="fa-brands fa-github-alt"></i>
            </div>
          </div>
        </div>
        <div className="content projectsContent3">
          <img
            src="https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="#"
          />
          <div className="details">
            <h3>Third Project</h3>
            <p>
              Advanced proficiency in React, developing efficient and
              interactive front-end applications with a strong emphasis on
              component-based architecture.
            </p>
            <div className="projectIcon">
              <i class="fa-solid fa-globe"></i>
              <i class="fa-brands fa-github-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </projects>
  );
};
export default Projects;
