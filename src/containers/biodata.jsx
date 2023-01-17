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
import systeric from "../assets/images/systeric.jfif"
import xtremax from "../assets/images/xtremax.jfif"

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
    period: "June 2022 - Present",
    web: "https://www.xtremax.com/",
  },
];

function Biodata() {
  const experienceDate = new Date("8/19/2021");
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
          <h2>Tools</h2>
          <Tools>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <ToolItems>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png"
                  alt="react"
                  height={40}
                />
                <div className="line"></div>
                React
              </ToolItems>
            </a>
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              <ToolItems>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg"
                  alt="next"
                  height={40}
                />
                <div className="line"></div>
                Next.js
              </ToolItems>
            </a>
            <a href="https://emotion.sh/" target="_blank" rel="noreferrer">
              <ToolItems>
                <img
                  src="https://user-images.githubusercontent.com/73683623/156110684-200a3c13-a363-4118-ae9e-42013ac6c6c8.png"
                  alt="emotion"
                  height={40}
                />
                <div className="line"></div>
                Emotion
              </ToolItems>
            </a>
            <a href="https://graphql.org/" target="_blank" rel="noreferrer">
              <ToolItems>
                <img
                  src="https://user-images.githubusercontent.com/73683623/156109923-4316ac94-692b-4f99-a231-13f8cbbf352e.png"
                  alt="graphql"
                  height={40}
                />
                <div className="line"></div>
                GraphQL
              </ToolItems>
            </a>
            <a href="https://redux.js.org" target="_blank" rel="noreferrer">
              <ToolItems>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                  alt="redux"
                  height={40}
                />
                <div className="line"></div>
                Redux
              </ToolItems>
            </a>
          </Tools>
        </ToolsContainer>
      </BiodataContent>
    </BiodataContainer>
  );
}

export default Biodata;
