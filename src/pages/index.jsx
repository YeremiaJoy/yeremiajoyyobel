import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import About from "../containers/about";
import Biodata from "../containers/biodata";
import Project from "../containers/project";

function Home() {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative", top: 0 }}>
        <About />
        <Biodata />
        <Project />
        <Footer />
      </div>
    </>
  );
}

export default Home;
