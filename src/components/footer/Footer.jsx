import React from 'react';
import { bool, string } from 'prop-types';
import { Link } from 'react-router-dom';

import './footer.styles.css';

const Footer = ({ hasLinks, activeLink }) => {
	return (
		<>
			<footer className="genesys__footer">
				<div className="footer__content">
					<div className="footer__left">
						{ hasLinks && (
							<ul className="footer__link-1">
								<li className={activeLink === 'build' ? 'active' : ''}><Link to="/" className="footer__link">build software</Link></li>
								<li className={activeLink === 'design' ? 'active' : ''}><Link to="/" className="footer__link">design different</Link></li>
								<li className={activeLink === 'apply' ? 'active' : ''}><Link to="/" className="footer__link">apply your knowledge</Link></li>
								<li className={activeLink === 'faq' ? 'active' : ''}><Link to="/" className="footer__link">faq</Link></li>
							</ul>
						)}
					</div>
					<div className="footer__middle">
						<p className="footer__item-1">
							Our Local Campus center: Kilometer 7,
							Enugu/Port<br/> Harcourt, Expressway,
							Centenary City, Enugu.<br/>  Nigeria
						</p>
						<p className="underline touch"><a href="#">get in touch</a></p>
					</div>

					<div className="footer__right">
						<div className="footer__img"></div>
						<div className="footer__remark">
							<p className="footer__item-2">
								Learnable is proud to be <br/>
								a collaborative effort of <br/>
								all the arms of our <br/>  product team
							</p>
							<p className="underline studio"><a href="#">head to devstudio</a></p>
						</div>
					</div>
				</div>
				<div className="footer__end">

					<ul className="footer__icons">
						<li className="center"><a href="#"></a></li>
						<li className="center"><a href="#"></a></li>
						<li className="center"><a href="#"></a></li>
						<li className="center"><a href="#"></a></li>
						<li className="center"><a href="#"></a></li>
						<li className="center"><a href="#"></a></li>
					</ul>

					<div className="footer__copyright">
						<p className="copy--right">&copy; Genesys 2020 <span className="ps">Privacy Statement</span></p>
					</div>
				</div>
			</footer>
		</>
	);
};

Footer.defaultProps = {
	hasLinks: true,
	activeLink: 'Home'
};

Footer.propTypes = {
	hasLinks: bool,
	activeLink: string
};

export default Footer;
