import React from 'react';
import {Link} from "react-router-dom";

const StartZone = () => {
	return (
		<>
			<section className="genesys__startzone--section">
				<div className="startzone--img"></div>

				<div className="startzone--text-content">
					<h1 className="startzone--main-text">StartZone</h1>
					<p className="startzone-sub-text">
						The business environment is harsh for early-stage businesses.
						We can help you <br /> rise above it all.
					</p>
					<span><Link to="/" className="learn-more">learn more</Link></span>
				</div>
			</section>
		</>
	);
};

export default StartZone;
