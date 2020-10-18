import React from 'react';
import { bool, string } from 'prop-types';
import { Link } from 'react-router-dom';

import './nav.styles.css';

const Nav = ({ hasLinks, activeLink }) => {
	return (
		<>
			<nav className="learnable__navbar">
				{ hasLinks && (
					<ul>
						<li className={activeLink === 'Home' ? 'active' : ''}><Link to="/">home</Link></li>
						<li className={activeLink === 'software developers' ? 'active' : ''}><Link to="/">software developers</Link></li>
						<li className={activeLink === 'product designers' ? 'active' : ''}><Link to="/">product designers</Link></li>
						<li className={activeLink === 'apply' ? 'active' : ''}><Link to="/">apply</Link></li>
						<li className={activeLink === 'journal' ? 'active' : ''}><Link to="/">journal</Link></li>
						<li className={activeLink === 'faq' ? 'active' : ''}><Link to="/">faq</Link></li>
					</ul>
					)}
			</nav>
		</>
	);
};

Nav.defaultProps = {
	hasLinks: true,
	activeLink: 'learnable'
};

Nav.propTypes = {
	hasLinks: bool,
	activeLink: string
};

export default Nav;
