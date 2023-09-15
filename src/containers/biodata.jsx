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
    id: 1,
    image: systeric,
    name: "PT. Systeric Teknologi Indonexia",
    period: "August 2021 - February 2022",
    web: "https://www.systeric.com/",
  },
  {
    id: 2,
    image: xtremax,
    name: "PT. Xtremax Teknologi Indonexia",
    period: "June 2022 - September 2023",
    web: "https://www.xtremax.com/",
  },
];

const tools = [
  {
    link: "https://reactjs.org/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png",
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
    link: "https://vitejs.dev/",
    image:
      "https://vitejs.dev/logo.svg",
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
      <div
        className="effect-0"
        // style={{ marginLeft: moveX, marginTop: moveY }}
      ></div>
      <WorkExperience>
        <h2>Work Experience</h2>
        {WorkExperiences.map((val) => {
          return (
            <a href={val.web} target="_blank" rel="noreferrer" key={val.id}>
              <img src={val.image} alt={val.name} width={50} />
              <div className="company">
                <div className="company-name">{val.name}</div>
                <div>{val.period}</div>
              </div>
            </a>
          );
        })}
      </WorkExperience>
      <BiodataContent>
        <LongExperience>
          <span>
            <h2>{diff.getYear()}</h2> Years
            <h2>{diff.getMonth()}</h2> Months
          </span>
          <div>Working Experience</div>
          <div>Front End Development</div>
        </LongExperience>
        <ToolsContainer>
          <h2>Main Tools</h2>
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
                    <img src={tool.image} alt={tool.name} height={40} />
                    <div className="line"></div>
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
