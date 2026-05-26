import React from "react";
import {
  BiodataContainer,
  BiodataContent,
  LongExperience,
  ToolItems,
  Tools,
  ToolsContainer,
  WorkExperience,
} from "../styles/biodata";
import systeric from "../assets/images/systeric.jfif";
import xtremax from "../assets/images/xtremax.jfif";

const WorkExperiences = [
  {
    id: 3,
    image: "https://mekari.com/wp-content/uploads/2022/04/logo-mekari.svg",
    name: "Mekari",
    role: "Frontend Engineer",
    period: "Oct 2023 – present",
    web: "https://mekari.com/",
    current: true,
  },
  {
    id: 2,
    image: xtremax,
    name: "PT. Xtremax Teknologi Indonesia",
    role: "Frontend Developer",
    period: "Jun 2022 – Oct 2023",
    web: "https://www.xtremax.com/",
    current: false,
  },
  {
    id: 1,
    image: systeric,
    name: "PT. Systeric Teknologi Indonesia",
    role: "Frontend Developer",
    period: "Aug 2021 – Feb 2022",
    web: "https://www.systeric.com/",
    current: false,
  },
];

const tools = [
  {
    link: "https://reactjs.org/",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    name: "React",
  },
  {
    link: "https://nextjs.org/",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg",
    name: "Next.js",
  },
  {
    link: "https://vuejs.org/",
    image: "https://avatars.githubusercontent.com/u/6128107?s=200&v=4",
    name: "Vue",
  },
  {
    link: "https://nuxt.com/",
    image: "https://nuxt.com/favicon.ico",
    name: "Nuxt",
  },
  {
    link: "https://vitejs.dev/",
    image: "https://vitejs.dev/logo.svg",
    name: "Vite",
  },
  {
    link: "https://www.typescriptlang.org/",
    image:
      "https://user-images.githubusercontent.com/73683623/226783790-afd1d57f-70c7-4a63-ad6a-91e38a8bf7b5.png",
    name: "TypeScript",
  },
  {
    link: "https://emotion.sh/",
    image:
      "https://user-images.githubusercontent.com/73683623/156110684-200a3c13-a363-4118-ae9e-42013ac6c6c8.png",
    name: "Emotion",
  },
  {
    link: "https://graphql.org/",
    image:
      "https://user-images.githubusercontent.com/73683623/156109923-4316ac94-692b-4f99-a231-13f8cbbf352e.png",
    name: "GraphQL",
  },
  {
    link: "https://redux.js.org/",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    name: "Redux",
  },
];

function Biodata() {
  const experienceDate = new Date("1/1/2022");
  const now = new Date();
  const diff = new Date(
    now.getFullYear() - experienceDate.getFullYear(),
    now.getMonth() - experienceDate.getMonth()
  );

  return (
    <BiodataContainer id="biodata">
      <WorkExperience>
        <h2 className="reveal">Work experience</h2>
        {WorkExperiences.map((val) => {
          return (
            <a href={val.web} target="_blank" rel="noreferrer" key={val.id} className="reveal">
              <img src={val.image} alt={val.name} width={44} />
              <div className="company">
                <div className="company-name">
                  {val.name}
                  {val.current && <span className="current-tag">Now</span>}
                </div>
                <div>{val.role} &middot; {val.period}</div>
              </div>
            </a>
          );
        })}
      </WorkExperience>
      <BiodataContent>
        <LongExperience className="reveal">
          <span>
            <h2>{diff.getYear()}</h2> Years
            <h2>{diff.getMonth()}</h2> Months
          </span>
          <div>Working experience</div>
          <div>Frontend development</div>
        </LongExperience>
        <ToolsContainer>
          <h2 className="reveal">Tech stack</h2>
          <Tools>
            {tools.map((tool) => {
              return (
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noreferrer"
                  key={tool.name}
                >
                  <ToolItems>
                    <img src={tool.image} alt={tool.name} height={36} />
                    {tool.name}
                  </ToolItems>
                </a>
              );
            })}
          </Tools>
        </ToolsContainer>
      </BiodataContent>
    </BiodataContainer>
  );
}

export default Biodata;
