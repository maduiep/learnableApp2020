import React from 'react';
import {animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
  scroll.scrollToTop();
};


const Subscribe = () => {
	return (
		<>
			<section className="genesys__subscribe--section">
				<div className="subscribe--arrow-img" onClick={scrollToTop}></div>
				<div className="subscribe--text-content">
					<div className="subscribe--text">
						<h1>Stay up to date on what we <br/> are doing and new learning  <br/> opportunities</h1>
					</div>
					<div className="subscribe--email-vpp">
						<p className="email-add">Your email</p>
						<hr/>
						<p className="vpp">View Privacy Policy</p>
					</div>
					<div className="subscribe__button">
						<button className="subscribe--btn">subscribe</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Subscribe;
