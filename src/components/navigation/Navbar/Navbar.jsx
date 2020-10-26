import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { bool, string } from "prop-types";

const scrollToTop = () => {
  scroll.scrollToTop();
};

function Navbar({ hasLinks }) {
  return (
    <>
      <header className="genesys__header">
        <div className="genesys__logo">
          <img
            className="logo"
            src="/img/logo.png"
            alt="Genesys logo"
            onClick={scrollToTop} />
        </div>
        <nav className="genesys__navbar">
          {hasLinks && (
            <ul className="navbar-items-1">
              <li>
                <Link
                  activeClass="active"
                  to="learnable"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  learnable
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="agora"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  agora
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="startZone"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  start zone
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  contact
                </Link>
              </li>
            </ul>
          )}
        </nav>
        <div className="genesys__navbar-right">
          <span className="build">build a product with</span>
          &nbsp; &nbsp;
          <button className="devstudio">
            <Link to="#">devstudio</Link>
          </button>
        </div>
      </header>
    </>
  );
}

Navbar.defaultProps = {
  hasLinks: true,
  activeLink: "learnable",
};

Navbar.propTypes = {
  hasLinks: bool,
  activeLink: string,
};

export default Navbar;
