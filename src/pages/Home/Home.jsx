import React from "react";
import Navbar from "../../components/navigation/Navbar/Navbar";
import Footer from "../../components/section/Footer/Footer";
import HomeSubscribe from "../../components/section/HomeSubs/HomeSubs";
import Learnable from "../../components/section/Learnable/Learnable";
import Agora from "../../components/section/Agora/Agora";
import About from "../../components/section/About/About";
import StartZone from "../../components/section/StartZone/StartZone";
import BestTeam from "../../components/section/BestTeam/BestTeam";
import OtherThings from "../../components/section/OtherThings/OtherThings";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main className="genesys__main--content">
        <About />
        <Learnable />
        <Agora />
        <StartZone />
        <OtherThings />
        <BestTeam />
        <HomeSubscribe />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
