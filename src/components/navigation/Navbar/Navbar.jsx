import React from 'react';
import { bool, string } from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ hasLinks, activeLink }) => {
	return (
		<>
			<header className="genesys__header">
				<div className="genesys__logo">
					<img className="logo" src="/img/logo.png" alt="Genesys logo"/>
				</div>
				<nav className="genesys__navbar">
					{hasLinks && (
					<ul className="navbar-items-1">
						<li><Link to="#">learnable</Link></li>
						<li><Link to="#">agora</Link></li>
						<li><Link to="#">start zone</Link></li>
						<li><Link to="#">about</Link></li>
						<li><Link to="#">contact</Link></li>
					</ul>
					)}
				</nav>
				<div className="genesys__navbar-right">
					<span className="build">build a product with</span>
						&nbsp;&nbsp;
					<button className="devstudio">
						<Link to="#">devstudio</Link>
					</button>
				</div>
			</header>
		</>
	);
};

Navbar.defaultProps = {
	hasLinks: true,
	activeLink: 'learnable'
};

Navbar.propTypes = {
	hasLinks: bool,
	activeLink: string
};

export default Navbar;
