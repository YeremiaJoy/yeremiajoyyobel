import { AboutContainer, AboutContent } from "../styles/about";
import photo from "../assets/images/foto banner top.png";
import ScrollDownArrow from "../assets/images/scroll-down-arrow.svg";
import { Button } from "../styles/navbar";
import { DownloadOutlined } from "@ant-design/icons";
import CV from "../assets/cv/CV - YEREMIA JOY YOBEL TANADI.pdf";
import Typed from "react-typed";

function About() {
  const experienceDate = new Date("8/19/2021");
  const now = new Date();
  const diff = new Date(
    now.getFullYear() - experienceDate.getFullYear(),
    now.getMonth() - experienceDate.getMonth()
  );

  return (
    <AboutContainer id="about">
      <div className="effect-wrap">
        <div
          className="effect-0"
          // style={{ marginLeft: moveX, marginTop: moveY }}
        ></div>
        <div
          className="effect effect-1"
          // style={{ marginLeft: moveX, marginTop: moveY }}
        ></div>
        <div
          className="effect effect-2"
          // style={{ marginLeft: moveX, marginTop: moveY }}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          className="effect effect-4"
          // style={{ marginLeft: moveX, marginTop: moveY }}
        ></div>
        <div
          className="effect effect-5"
          // style={{ marginLeft: moveX, marginTop: moveY }}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <AboutContent>
        <div className="mobile">
          <img src={photo} alt="myphoto" />
        </div>
        <div>
          <div className="name">Hello, I'm Yeremia Joy</div>
          <div className="interested">
            and I interested in{" "}
            <Typed
              className="typed-text"
              strings={["FRONTEND DEVELOPMENT"]}
              typeSpeed={60}
              backSpeed={50}
              loop
            />
          </div>
          <p>
            People usually call me "Joy" and I'm a freshgraduate from BINUS
            University majoring in Computer Science. During college, I had an
            experience as a Head of Student Association called "Himpunan
            Mahasiswa Teknik Informatika (HIMTI)” in 2020. I have experience in
            Frontend Development ±{diff.getYear() + 1} years. I'm currently
            developing some website projects using javascript framework like{" "}
            <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
              React App{" "}
            </a>
            and{" "}
            <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
              Next.js
            </a>
          </p>
          <a href={CV} style={{ display: "flex", width: "fit-content" }}>
            <Button className="center">
              <DownloadOutlined style={{ marginRight: 5 }} /> Download CV
            </Button>
          </a>
        </div>
        <div className="desktop">
          <img src={photo} alt="myphoto" />
        </div>
        <div className="hero__scrollDown">
          <p>Scroll</p>
          <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
        </div>
      </AboutContent>
    </AboutContainer>
  );
}

export default About;
