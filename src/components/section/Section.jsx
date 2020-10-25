import React from "react";
import "./section.css";

export default function Section({ children, id }) {
  return (
    <div className="section" id={id}>
      {children}
    </div>
  );
}
