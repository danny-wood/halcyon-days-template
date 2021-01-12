import React from "react";
import "./section-with-background.scss";

function SectionWidthBackground({ children, imageSrc, isBgFixed }) {
  return (
    <section
      className={`section-with-background ${isBgFixed ? "bg-fixed" : ""}`}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {children}
    </section>
  );
}

export default SectionWidthBackground;
