import React from "react";
import {
  ProjectContainer,
  ProjectContent,
  ProjectItem,
  ProjectItems,
} from "../styles/project";
import project1 from "../assets/images/main_project.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";

const project = [
  {
    id: 1,
    name: "Jasain.com ",
    desc: "Jasain is e-commerce service business website, build using Next.js, Ant Design, Redux, and MERN (MongoDB, Express, React, Node Js) Stack  (Feb 2022)",
    img: project1,
    link: "https://jasain.com",
  },
  {
    id: 2,
    name: "Werkules ERP Admin",
    desc: "Developed Enterprise Resource Planning (ERP) Progressive Web App used for Contractors in Germany to plan construction sites, inventories, working hours, etc.  (Sep 2021)",
    img: project2,
    link: "https://dev.werkules.systeric.com/",
  },
  {
    id: 3,
    name: "TitipPaket",
    desc: "This is my project with Systeric Teknologi Indonesia Team, TitipPaket is an Economical delivery app with pick up service, developed with NextJs and Ant Design.  (Aug 2021)",
    img: project3,
    link: "https://titippaket-landing.systeric.com/",
  },
  {
    id: 4,
    name: "My Own Portfolio",
    desc: "Yap! This is my first portfolio that I created to put all the information about me on this website. I learn ReactJs to build my own Portfolio.   (Jul 2021)",
    img: project4,
    link: "https://yeremiajoy.github.io",
  },
];

function Project() {
  return (
    <ProjectContainer id="project">
      <div
        className="effect-0"
        // style={{ marginLeft: moveX, marginTop: moveY }}
      ></div>
      <ProjectContent>
        <h2 className="center">My Project List</h2>
        <ProjectItems>
          {project.map((val) => {
            return (
              <ProjectItem href={val.link} key={val.id}>
                <img src={val.img} alt={val.name} width="100%" height="100%" />
                <div className="name">{val.name}</div>
                <div className="desc">{val.desc}</div>
              </ProjectItem>
            );
          })}
        </ProjectItems>
      </ProjectContent>
    </ProjectContainer>
  );
}

export default Project;
