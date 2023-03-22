import React from "react";
import {
  ProjectContainer,
  ProjectContent,
  ProjectItem,
} from "../styles/project";
import project1 from "../assets/images/main_project.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const project = [
  {
    id: Math.floor(Math.random() * 100),
    name: "Event Live Streaming & Invitation",
    desc: "Provide a YouTube video with dynamic invitation name, integrated with custom CMS and stored in MongoDB. Build using Next.js with material UI library and express.js for backend development (Jan 2023)",
    img: project5,
    link: "https://jacobnco.vercel.app/woman-man?to=Tamu",
  },
  {
    id: Math.floor(Math.random() * 100),
    name: "Registration App (Mobile Web)",
    desc: "Application that integrated with backend and stored in database, used for user attendance only use QR code. Build using MERN (MongoDB, Express, React, Node Js) stack (Oct 2022)",
    img: project4,
    link: "https://registration-application.vercel.app",
  },
  {
    id: Math.floor(Math.random() * 100),
    name: "Jasain.com",
    desc: "Jasain is e-commerce service business website, build using Next.js, Ant Design, Redux, and MERN (MongoDB, Express, React, Node Js) stack (Feb 2022)",
    img: project1,
    link: "https://jasain-landing-page-one.vercel.app/",
  },
  {
    id: Math.floor(Math.random() * 100),
    name: "Werkules ERP Admin",
    desc: "(website not active) Developed Enterprise Resource Planning (ERP) Progressive Web App used for Contractors in Germany to plan construction sites, inventories, working hours, etc.  (Sep 2021)",
    img: project2,
    link: "https://dev.werkules.systeric.com/",
  },
  {
    id: Math.floor(Math.random() * 100),
    name: "TitipPaket",
    desc: "This is my project with Systeric Teknologi Indonesia Team, TitipPaket is an Economical delivery app with pick up service, developed with NextJs and Ant Design.  (Aug 2021)",
    img: project3,
    link: "https://github.com/YeremiaJoy/TitipPaket",
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
        {/* <ProjectItems> */}
        <Swiper
          spaceBetween={16}
          modules={[Pagination]}
          slidesPerView={1}
          breakpoints={{
            960: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
            },
          }}
          pagination={{ clickable: true }}
          className="package-card-container"
        >
          {project.map((val, idx) => {
            return (
              <SwiperSlide key={idx}>
                <ProjectItem>
                  <a href={val.link} target="_blank" rel="noreferrer">
                    <img
                      src={val.img}
                      alt={val.name}
                      width="100%"
                      height="100%"
                    />
                  </a>
                  <div className="name">{val.name}</div>
                  <div className="desc">{val.desc}</div>
                </ProjectItem>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* </ProjectItems> */}
      </ProjectContent>
    </ProjectContainer>
  );
}

export default Project;
