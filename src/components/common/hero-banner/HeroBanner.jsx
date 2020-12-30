import React from "react";
import PropTypes from "prop-types";
import "./hero-banner.scss";
import ScrollArrow from "components/common/scroll-arrow/ScrollArrow";

function HeroBanner({ src, alt, children }) {
  return (
    <div className="hero-banner">
      {src && <img src={src} alt={alt || "Hero Banner"} />}
      <div className="hero-content">{children}</div>
      <ScrollArrow />
    </div>
  );
}

export default HeroBanner;

HeroBanner.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node,
};
