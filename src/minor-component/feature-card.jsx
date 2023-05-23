import PropTypes from "prop-types";
import figma from "../assets/figma.png";

function FeatureCard({ feature, description, icon }) {
  return (
    <div className="feature-card">
      <div className="feature-icon flex justify-center items-center">
        <img src={icon} alt="figma-icon" />
      </div>
      <h3 className="collosal-tagline text-white mt-5">{feature}</h3>
      <p className="collosal-description text-[13px] leading-7">{description}</p>
    </div>
  );
}

FeatureCard.propTypes = {
  feature: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
};

FeatureCard.defaultProps = {
  feature: "Feature",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus officiis quibusdam praesentium autem",
  icon: figma,
};
export default FeatureCard;
