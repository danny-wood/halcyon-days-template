import React from "react";
import PropTypes from "prop-types";
import "./hero-banner.scss";

function HeroBanner({ src, alt, children }) {
  return (
    <div className="hero-banner">
      {src && <img src={src} alt={alt || "Hero Banner"} />}
      {children}
    </div>
  );
}

export default HeroBanner;

HeroBanner.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node,
};
