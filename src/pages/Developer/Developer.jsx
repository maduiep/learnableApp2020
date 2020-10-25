import React from "react";
import Navbar from "../../components/navigation/Navbar/Navbar";
import Nav from "../../components/navigation/Nav/Nav";
import SoftDev from "../../components/sections/SoftDev/SoftDev";
import Subscribe from "../../components/sections/Subscribe/Subscribe";
import Footer from "../../components/sections/Footer/Footer";

const Developer = () => {
  return (
    <>
      <Navbar />
      <Nav />
      <SoftDev />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Developer;
