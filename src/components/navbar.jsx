import React, { useEffect, useState } from "react";
import {
  Button,
  NavbarAction,
  NavbarContainer,
  NavbarContent,
} from "../styles/navbar";
import logo from "../assets/images/logo.png";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [button, setButton] = useState(false);
  const [clicked, setClicked] = useState(false);

  function showButton() {
    if (window.innerWidth <= 660) {
      setButton(true);
    } else {
      setButton(false);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", showButton);
    showButton();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 80);
    });
  }, [scroll]);

  return (
    <NavbarContainer scrolled={scroll}>
      <NavbarContent>
        <a href="#about">
          <img src={logo} alt="logo" height={28} width={96} />
        </a>
        <NavbarAction>
          {button && (
            <div className="menu-icon" onClick={() => setClicked(!clicked)}>
              {clicked ? <CloseOutlined /> : <MenuOutlined />}
            </div>
          )}
          <div
            className={
              button && clicked
                ? "mobile-menu"
                : button
                ? "mobile-menu hide"
                : "false"
            }
          >
            <a href="#about" onClick={() => setClicked(!clicked)}>
              About
            </a>
            <a href="#biodata" onClick={() => setClicked(!clicked)}>
              Biodata
            </a>
            <a href="#project" onClick={() => setClicked(!clicked)}>
              Project
            </a>
            <a
              href="mailto:yeremiajoy@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Whatsapp"
            >
              <Button>Contact</Button>
            </a>
          </div>
        </NavbarAction>
      </NavbarContent>
    </NavbarContainer>
  );
}

export default Navbar;
