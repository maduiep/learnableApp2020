import React from "react";
import Navbar from "../../components/navigation/Navbar/Navbar";
import Nav from "../../components/navigation/Nav/Nav";
import Journal from "../../components/sections/JournalPage/JournalPage";
import Subscribe from "../../components/sections/Subscribe/Subscribe";
import Footer from "../../components/sections/Footer/Footer";

const JournalPage = () => {
  return (
    <>
      <Navbar />
      <Nav />
      <Journal />
      <Subscribe />
      <Footer />
    </>
  );
};

export default JournalPage;
