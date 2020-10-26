import React from 'react';

import {animateScroll as scroll } from "react-scroll";

const scrollToBottom = () => {
  scroll.scrollToBottom();
};


const ImgSection = () => {
    return (
    <>
    <section className="learnable__imgsection">
       <div className="imgsection__arrow" onClick={scrollToBottom}>
        
       </div>
       <div className="imgsection__img"></div>
    </section>
    </>
    );
};

export default ImgSection;
