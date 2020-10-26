import React from 'react';
import {animateScroll as scroll } from "react-scroll";

const scrollToBottom = () => {
  scroll.scrollToBottom();
};


const About = () => {
	return (
		<>
			<section className="genesys__about--section">
				<div className="about--text-content">
					<h1 className="about">
						Genesys provides opportunities for <br /> young Nigerian techies and <br /> opportunities to grow and <br /> innovate.
					</h1>
					<p>
						We understand that opportunities are scarce in these parts. We <br /> are either creating or exposing our people to these <br /> opportunities.
					</p>
				</div>
				<div className="about--image-content">
					<div className="about--arrow-img" onClick={scrollToBottom}></div>
					<div className="about--main--img"></div>
				</div>
			</section>
		</>
	);
};

export default About;
