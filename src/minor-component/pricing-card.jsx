import PropTypes from "prop-types";

function PricingCard({ bgColor = "#3F2379" }) {
  return (
    <div className={`pricing-card bg-[${bgColor}]`}>
      <div className="row-span-1 grid-cols-2 flex gap-x-2.5">
        <div className="col-span-1">
          <p>Pricing Name</p>
        </div>
        <div className="col-span-1 pt-1">
          <p className="collosal-description text-xs">Starting from</p>
          <h2 className="collosal-title">1200$</h2>
        </div>
      </div>
      <div className="row-span-1 grid-rows-4 text-center leading-9">
        <div className="row-span-1">Feature 1</div>
        <div className="row-span-1">Feature 2</div>
        <div className="row-span-1">Feature 3</div>
        <div className="row-span-1">Feature 4</div>
      </div>
      <div className="row-span-1 flex justify-center mt-12">
        <button className="bg-white text-indigo-500 w-[240px] h-[55px] rounded">Button</button>
      </div>
    </div>
  );
}
PricingCard.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

export default PricingCard;
