import React from "react";
import Navbar from "../../components/navigation/Navbar/Navbar";
import Nav from "../../components/navigation/Nav/Nav";
import Footer from "../../components/section/Footer/Footer";
import Subscribe from "../../components/section/Subscribe/Subscribe";
import Broadcast from "../../components/section/Broadcast/Broadcast";
import Journal from "../../components/section/Journal/Journal";
import Apply from "../../components/section/Apply/Apply";
import Classrooms from "../../components/section/Classrooms/Classrooms";
import Experts from "../../components/section/Experts/Experts";
import Learning from "../../components/section/Learning/Learning";
import Culture from "../../components/section/Culture/Culture";
import Eligible from "../../components/section/Eligible/Eligible";
import Design from "../../components/section/Design/Design";
import Software from "../../components/section/Software/Software";
import ComingSoon from "../../components/section/ComingSoon/ComingSoon";
import Everything from "../../components/section/Everything/Everything";
import Gathering from "../../components/section/Gathering/Gathering";
import Experience from "../../components/section/Experience/Experience";
import FAQ from "../../components/section/FAQ/FAQ";

const Learnable = () => {
  return (
    <>
      <Navbar />
      <Nav />
      <ComingSoon />
      <Everything />
      <Gathering />
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
