import React from 'react';

import './subscribe.styles.css';

const Subscribe = () => {
	return (
		<>
			<section className="genesys__subscribe--section">
				<diV className="subscribe--arrow-img"></diV>
				<div className="subscribe--text-content">
					<diV className="subscribe--text">
						<h1>Stay up to date on what we <br/> are doing and new learning  <br/> opportunities</h1>
					</diV>
					<diV className="subscribe--email-vpp">
						<p className="email-add">Your email</p>
						<hr/>
						<p className="vpp">View Privacy Policy</p>
					</diV>
					<div className="subscribe__button">
						<button className="subscribe--btn">subscribe</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Subscribe;
