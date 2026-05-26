import React, { useEffect, useState } from "react";
import {
  Button,
  NavbarAction,
  NavbarContainer,
  NavbarContent,
  ThemeToggle,
} from "../styles/navbar";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [button, setButton] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const { theme, toggleTheme } = useTheme();

  function showButton() {
    if (window.innerWidth <= 768) {
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

  useEffect(() => {
    const sections = document.querySelectorAll("main > section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <NavbarContainer scrolled={scroll}>
      <NavbarContent>
        <a href="#about" style={{ color: "var(--text-primary)", fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
          YJYT
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
            <a href="#about" onClick={() => setClicked(false)} className={activeSection === "about" ? "active" : ""}>
              About
            </a>
            <a href="#biodata" onClick={() => setClicked(false)} className={activeSection === "biodata" ? "active" : ""}>
              Experience
            </a>
            <a href="#project" onClick={() => setClicked(false)} className={activeSection === "project" ? "active" : ""}>
              Projects
            </a>
            <a
              href="mailto:yeremiajoy@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
            >
              <Button>Contact</Button>
            </a>
          </div>
          <ThemeToggle
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "☀" : "☽"}
          </ThemeToggle>
        </NavbarAction>
      </NavbarContent>
    </NavbarContainer>
  );
}

export default Navbar;
