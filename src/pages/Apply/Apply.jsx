import React from "react";
import Navbar from "../../components/navigation/Navbar/Navbar";
import Nav from "../../components/navigation/Nav/Nav";
import ApplyPage from "../../components/sections/ApplyPage/ApplyPage";
import Subscribe from "../../components/sections/Subscribe/Subscribe";
import Footer from "../../components/sections/Footer/Footer";

const Designer = () => {
  return (
    <>
      <Navbar />
      <Nav />
      <ApplyPage />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Designer;
