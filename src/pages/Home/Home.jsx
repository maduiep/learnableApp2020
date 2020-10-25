import React from "react";
import Navbar from "../../components/navigation/Navbar/Navbar";
import Footer from "../../components/sections/Footer/Footer";
import HomeSubscribe from "../../components/sections/HomeSubs/HomeSubs";
import Learnable from "../../components/sections/Learnable/Learnable";
import Agora from "../../components/sections/Agora/Agora";
import About from "../../components/sections/About/About";
import StartZone from "../../components/sections/StartZone/StartZone";
import BestTeam from "../../components/sections/BestTeam/BestTeam";
import OtherThings from "../../components/sections/OtherThings/OtherThings";
import Section from "../../components/section/Section";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Section id="about">
        <About />
      </Section>
      <Section id="learnable">
        <Learnable />
      </Section>
      <Section id="agora">
        <Agora />
      </Section>
      <Section id="startZone">
        <StartZone />
      </Section>
      <Section id="otherThings">
        <OtherThings />
      </Section>
      <Section id="bestTeam">
        <BestTeam />
      </Section>
      <Section id="homeSubscribe">
        <HomeSubscribe />
      </Section>
      <Footer />
    </>
  );
};

export default Homepage;
