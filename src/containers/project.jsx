import React from "react";
import {
  ProjectContainer,
  ProjectContent,
  FeaturedCard,
  ProjectGrid,
  ProjectCard,
} from "../styles/project";
import project1 from "../assets/images/main_project.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";

const projects = [
  {
    id: 1,
    name: "Jasain.com",
    desc: "E-commerce service platform built with Next.js, Ant Design, Redux, and MERN stack.",
    img: project1,
    link: "https://jasain-landing-page-one.vercel.app/",
    tags: ["Next.js", "Redux", "Ant Design"],
  },
  {
    id: 2,
    name: "Birthday invitation App",
    desc: "Invitation with RSVP form and guest list management, built using Next.js and Supabase.",
    img: project5,
    link: "https://joashonederfulyear.vercel.app?name=Joash",
    tags: ["Next.js", "Supabase"],
  },
  {
    id: 3,
    name: "Registration app",
    desc: "QR code-based attendance system with backend integration and database storage. MERN stack.",
    img: project4,
    link: "https://registration-application.vercel.app",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 4,
    name: "Werkules ERP admin",
    desc: "Enterprise resource planning PWA for German contractors — managing sites, inventories, and working hours.",
    img: project2,
    link: "https://dev.werkules.systeric.com/",
    tags: ["React", "PWA", "ERP"],
  },
  {
    id: 5,
    name: "TitipPaket",
    desc: "Economical delivery app with pick-up service, developed at Systeric Teknologi Indonesia.",
    img: project3,
    link: "https://github.com/YeremiaJoy/TitipPaket",
    tags: ["Next.js", "Ant Design"],
    isGithub: true,
  },
];

function Project() {
  const [featured, ...rest] = projects;

  return (
    <ProjectContainer id="project">
      <ProjectContent>
        <h2 className="reveal">Selected projects</h2>

        <FeaturedCard
          href={featured.link}
          target="_blank"
          rel="noreferrer"
          className="reveal reveal-delay-1"
        >
          <div className="featured-img">
            <img src={featured.img} alt={featured.name} />
          </div>
          <div className="featured-body">
            <div className="proj-number">01</div>
            <div className="proj-title">{featured.name}</div>
            <div className="proj-desc">{featured.desc}</div>
            <div className="tags">
              {featured.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="proj-link">View project →</div>
          </div>
        </FeaturedCard>

        <ProjectGrid>
          {rest.map((val, i) => (
            <ProjectCard
              key={val.id}
              href={val.link}
              target="_blank"
              rel="noreferrer"
              className={`reveal reveal-delay-${(i % 3) + 2}`}
            >
              <div className="card-img">
                <img src={val.img} alt={val.name} />
              </div>
              <div className="card-body">
                <div className="proj-number">0{i + 2}</div>
                <div className="proj-title">{val.name}</div>
                <div className="proj-desc">{val.desc}</div>
                <div className="tags">
                  {val.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ProjectContent>
    </ProjectContainer>
  );
}

export default Project;
