import React from "react";
import { Link } from "react-router-dom";

const Agora = () => {
  return (
    <>
      <section className="genesys__agora--section">
        <div className="agora--text-content">
          <h1 className="agora--main-text">Agora</h1>
          <p className="agora-sub-text">
            We are reimagining the workplace and how people work. Find out how
            our <br />
            co-working spaces can help you enjoy the work that you do.
          </p>
          <span>
            <Link to="/agora" className="learn-more">
              learn more
            </Link>
          </span>
        </div>
        <div className="agora--img"></div>
      </section>
    </>
  );
};

export default Agora;
