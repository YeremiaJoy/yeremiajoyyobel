import React, { useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import About from "../containers/about";
import Biodata from "../containers/biodata";
import Project from "../containers/project";

function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main>
        <About />
        <Biodata />
        <Project />
      </main>
      <Footer />
    </>
  );
}

export default Home;
