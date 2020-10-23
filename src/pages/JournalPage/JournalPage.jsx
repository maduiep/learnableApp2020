import React from "react";
import Navbar from "../../components/navigation/Navbar/Navbar";
import Nav from "../../components/navigation/Nav/Nav";
import Journal from "../../components/section/JournalPage/JournalPage";
import Subscribe from "../../components/section/Subscribe/Subscribe";
import Footer from "../../components/section/Footer/Footer";

const JournalPage = () => {
 return (
  <>
   <Navbar />
   <Nav />
   <Journal />
   <Subscribe />
   <Footer />
  </>
 )
}

export default JournalPage;