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
        <FooterGetInTouch>Get in Touch</FooterGetInTouch>
        <div className="email">
          For recruitment inquiries, please contact me{" "}
          <a href="mailto:yeremiajoy@gmail.com">yeremiajoy@gmail.com</a>
        </div>
        <div className="center" style={{ fontSize: 12, marginTop: 16 }}>
          YJYT © 2022 | built by Yeremia Joy Yobel T.
        </div>
        <SocialIcons>
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
