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
						<li className={activeLink === 'learnable' ? 'active' : ''}><Link to="/learnable">learnable</Link></li>
						<li className={activeLink === 'agora' ? 'active' : ''}><Link to="/agora">agora</Link></li>
						<li className={activeLink === 'zone' ? 'active' : ''}><Link to="/zone">start zone</Link></li>
						<li className={activeLink === 'about' ? 'active' : ''}><Link to="/about">about</Link></li>
						<li className={activeLink === 'contact' ? 'active' : ''}><Link to="/contact">contact</Link></li>
					</ul>
					)}
				</nav>
				<div className="genesys__navbar-right">
					<span className="build">build a product with</span>
					<button className="devstudio">
						<Link to="/">devstudio</Link>
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
