import React from "react";
import Navbar from "../../components/navigation/Navbar/Navbar";
import Footer from "../../components/section/Footer/Footer";
import Subscribe from "../../components/section/Subscribe/Subscribe";
import Learnable from "../../components/section/Learnable/Learnable";
import Agora from "../../components/section/Agora/Agora";
import StartZone from "../../components/section/StartZone/StartZone";
import BestTeam from "../../components/section/BestTeam/BestTeam";
import OtherThings from "../../components/section/OtherThings/OtherThings";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main className="genesys__main--content">
        <Learnable />
        <Agora />
        <StartZone />
        <OtherThings />
        <BestTeam />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
