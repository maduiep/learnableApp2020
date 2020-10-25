import React from "react";
import { Link } from "react-router-dom";

const BestTeam = () => {
  return (
    <>
      <section className="genesys__bestTeam--section">
        <div className="bestTeam--img"></div>
        <div className="bestTeam--text-content">
          <h1 className="bestTeam--main-text">The best team in the world</h1>
          <p className="bestTeam-sub-text">
            We work with the most amazing people our industry has to offer.{" "}
            <br />
            They are really passionate about making a difference
          </p>
          <span>
            <Link to="/" className="learn-more">
              See team
            </Link>
          </span>
        </div>
      </section>
    </>
  );
};

export default BestTeam;
