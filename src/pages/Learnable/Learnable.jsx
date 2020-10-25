import React from "react";
import Navbar from "../../components/navigation/Navbar/Navbar";
import Nav from "../../components/navigation/Nav/Nav";
import Footer from "../../components/sections/Footer/Footer";
import Subscribe from "../../components/sections/Subscribe/Subscribe";
import Broadcast from "../../components/sections/Broadcast/Broadcast";
import Journal from "../../components/sections/Journal/Journal";
import Apply from "../../components/sections/Apply/Apply";
import Classrooms from "../../components/sections/Classrooms/Classrooms";
import Experts from "../../components/sections/Experts/Experts";
import Learning from "../../components/sections/Learning/Learning";
import Culture from "../../components/sections/Culture/Culture";
import Eligible from "../../components/sections/Eligible/Eligible";
import Design from "../../components/sections/Design/Design";
import Software from "../../components/sections/Software/Software";
import ComingSoon from "../../components/sections/ComingSoon/ComingSoon";
import Everything from "../../components/sections/Everything/Everything";
import Circle from "../../components/sections/Circle/circle";
import Imgsection from "../../components/sections/Imgsection/imgsection";
import Gathering from "../../components/sections/Gathering/Gathering";
import Making from "../../components/sections/Making/Making";
import Experience from "../../components/sections/Experience/Experience";
import FAQ from "../../components/sections/FAQ/FAQ";

const Learnable = () => {
  return (
    <>
      <Navbar />
      <Nav />
      <ComingSoon />
      <Everything />
      <Circle />
      <Imgsection />
      <Gathering />
      <Making />
      <Experience />
      <Software />
      <Design />
      <Eligible />
      <Culture />
      <Learning />
      <Experts />
      <Classrooms />
      <Apply />
      <FAQ>
        <FAQ.QAItem>
          <FAQ.Question answerId="q1">
            {(isOpen, onToggle) => {
              return (
                <>
                  {isOpen ? "Open " : "Close "}
                  <span>q1</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q1"> q1 </FAQ.Answer>
        </FAQ.QAItem>
        <FAQ.QAItem>
          <FAQ.Question answerId="q2">
            {(isOpen, onToggle) => {
              return (
                <>
                  {isOpen ? "Open " : "Close "}
                  <span>q2</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q2"> q2 </FAQ.Answer>
        </FAQ.QAItem>
        <FAQ.QAItem>
          <FAQ.Question answerId="q3">
            {(isOpen, onToggle) => {
              return (
                <>
                  {isOpen ? "Open " : "Close "}
                  <span>q3</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q3"> q3 </FAQ.Answer>
        </FAQ.QAItem>
      </FAQ>
      <Journal />
      <Broadcast />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Learnable;
