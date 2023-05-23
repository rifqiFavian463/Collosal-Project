import PropTypes from "prop-types";

function PricingCard({ bgColor, textColor, pricingName, price, features }) {
  return (
    <div className={`pricing-card ${bgColor}`}>
      <div className="row-span-1 grid-cols-2 flex gap-x-2.5 justify-around">
        <div className="col-span-1">
          <p>{pricingName}</p>
        </div>
        <div className="col-span-1 pt-1">
          <p className="collosal-description text-xs">Starting from</p>
          <h2 className="collosal-title">{price}</h2>
        </div>
      </div>
      <div className="row-span-1 grid-rows-4 text-center leading-9">
        {features.map((feature, i) => {
          return (
            <div className="row-span-1" key={i}>
              {feature}
            </div>
          );
        })}
      </div>
      <div className="row-span-1 flex justify-center mt-12">
        <button className={`bg-white w-[240px] h-[55px] rounded ${textColor}`}>Detail</button>
      </div>
    </div>
  );
}
PricingCard.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  pricingName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired,
};

PricingCard.defaultProps = {
  bgColor: "bg-[#3F2379]",
  textColor: "text-[#3F2379]",
  pricingName: "pricingName",
  price: "$1200",
  features: ["feature 1", "feature 2", "feature 3", "feature 4"],
};

export default PricingCard;
