import { AboutContainer, AboutContent } from "../styles/about";
import photo from "../assets/images/foto banner top.png";
import { Button } from "../styles/navbar";
import { DownloadOutlined } from "@ant-design/icons";
import CV from "../assets/cv/Yeremia Joy Yobel Tanadi - Software Engineer Frontend.pdf";
import Typed from "react-typed";

function About() {
  const experienceDate = new Date("1/1/2022");
  const now = new Date();
  const diff = new Date(
    now.getFullYear() - experienceDate.getFullYear(),
    now.getMonth() - experienceDate.getMonth()
  );

  return (
    <AboutContainer id="about">
      <AboutContent>
        <div className="mobile reveal">
          <img src={photo} alt="Yeremia Joy - Frontend Software Engineer" />
        </div>
        <div>
          <div className="badge reveal">
            <span className="dot"></span>
            Currently at Mekari
          </div>
          <div className="name reveal reveal-delay-1">Yeremia Joy</div>
          <div className="interested reveal reveal-delay-2">
            Frontend Software Engineer focused on{" "}
            <Typed
              className="typed-text"
              strings={["Nuxt.js", "Vue", "React", "Next.js", "TypeScript"]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </div>
          <p className="reveal reveal-delay-3">
            A software engineer with {diff.getYear()}+ years of experience
            building web applications. Currently at{" "}
            <a href="https://mekari.com/" rel="noreferrer" target="_blank">
              Mekari
            </a>
            , working on the Expense Management product. Previously contributed
            to enterprise products at{" "}
            <a href="https://www.xtremax.com/" rel="noreferrer" target="_blank">
              Xtremax
            </a>
            . Graduated from BINUS University with a degree in Computer Science.
          </p>
          <a href={CV} className="cv-link reveal reveal-delay-4">
            <Button>
              <DownloadOutlined style={{ marginRight: 6 }} /> Download CV
            </Button>
          </a>
        </div>
        <div className="desktop reveal reveal-delay-2">
          <img src={photo} alt="Yeremia Joy Yobel - Frontend Engineer" />
        </div>
        <div className="hero__scrollDown">
          <div className="scroll-line"></div>
          <p>scroll</p>
        </div>
      </AboutContent>
    </AboutContainer>
  );
}

export default About;
