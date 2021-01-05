import PropTypes from "prop-types";
import "./section.scss";
import titleBg from "assets/title-bg.png";

function Section({ isFluid = false, title, className, children }) {
  return (
    <section className={`container page-section ${className}`}>
      <div className={!isFluid ? "contained" : undefined}>
        {title && (
          <div className="page-section-title">
            <h2>{title}</h2>
            <img
              src={titleBg}
              alt="Title BG"
              loading="lazy"
              className="page-section-title-bg"
            />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;

Section.propTypes = {
  isFluid: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
