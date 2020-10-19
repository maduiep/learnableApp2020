import React from "react";
import { Link } from "react-router-dom";

const Learnable = () => {
  return (
    <>
      <section className="genesys__learnable--section">
        <div className="learnable--img"></div>

        <div className="learnable--text-content">
          <h1 className="learnable--main-text">Learnable</h1>
          <p className="learnable-sub-text">
            Every year, young Nigerians are launching new careers in the
            technology
            <br /> industry. Find out how Genesys is helping them do it.
          </p>
          <span>
            <Link to="/" className="learn-more">
              learn more
            </Link>
          </span>
        </div>
      </section>
    </>
  );
};

export default Learnable;
