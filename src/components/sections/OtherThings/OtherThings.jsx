import React from 'react';
import { Link } from 'react-router-dom';

const OtherThings = () => {
	return (
		<>
			<section className="genesys__otherThings--section">
				<div className="otherThings__boxes">

					<div className="boxes--1">
						<div className="box--1"></div>
						<div className="box--2"></div>
						<p className="codeville"><Link to="/">CodeVille</Link></p>
					</div>

					<div className="boxes--2">
						<div className="box--3">
							<h1><Link to="/">Genesys <br/> Ignite</Link></h1>
						</div>
						<div className="box--4"></div>
						<p className="pink"><Link to="/">Pink summer <br/> of code</Link></p>
					</div>

				</div>
				<div className="otherThings__text">
					<h1 className="otherThings__h1">Other things we <br/>do</h1>
				</div>
			</section>
		</>
	);
};

export default OtherThings;
