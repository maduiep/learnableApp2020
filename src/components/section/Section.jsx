import React from "react";

export default function Section({ children, id }) {
  return (
    <div id={id}>
      {children}
    </div>
  );
}
