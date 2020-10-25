import React from "react";
import Navbar from "../../components/navigation/Navbar/Navbar";
import Nav from "../../components/navigation/Nav/Nav";
import FAQ from "../../components/sections/FAQ/FAQ";
import Subscribe from "../../components/sections/Subscribe/Subscribe";
import Footer from "../../components/sections/Footer/Footer";

const Faq = () => {
  return (
    <>
      <Navbar />
      <Nav />
      <FAQ />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Faq;
