import React from "react";
import { FaChevronDown } from "react-icons/fa";
import "./scroll-arrow.scss";

function ScrollArrow({ className }) {
  return (
    <div className={`scroll-arrow ${className || ""}`}>
      <FaChevronDown />
    </div>
  );
}

export default ScrollArrow;
