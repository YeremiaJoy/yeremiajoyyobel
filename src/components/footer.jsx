import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";
import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterGetInTouch,
  SocialIcons,
} from "../styles/footer";

function Footer() {
  return (
    <FooterContainer id="footer">
      <FooterContent>
        <FooterGetInTouch className="reveal">Let's work together</FooterGetInTouch>
        <div className="email reveal reveal-delay-1">
          Reach me at{" "}
          <a href="mailto:yeremiajoy@gmail.com">yeremiajoy@gmail.com</a>
        </div>
        <div className="copyright reveal reveal-delay-2">
          &copy; {new Date().getFullYear()} Yeremia Joy Yobel Tanadi
        </div>
        <SocialIcons className="reveal reveal-delay-2">
          <a
            href="https://github.com/YeremiaJoy"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubOutlined />
          </a>
          <a
            href="https://www.linkedin.com/in/yeremiajoy/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinFilled />
          </a>
          <a
            href="https://www.instagram.com/yeremiajoy/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <InstagramOutlined />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=6281384010895"
            target="_blank"
            rel="noreferrer"
            aria-label="Whatsapp"
          >
            <WhatsAppOutlined />
          </a>
        </SocialIcons>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
