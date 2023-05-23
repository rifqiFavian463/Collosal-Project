import avatar1 from "../assets/avatar1.png";
import quoteBadge from "../assets/quoteBadge.png";
import PropTypes from "prop-types";

function TestimonialCard({ avatar, name, company, quote }) {
  return (
    <div className="testimonial-card">
      <div className="grid justify-center grid-rows-2 row-span-1 relative">
        <div className="grid row-span-1 justify-center ">
          <img src={avatar} alt="Profile" />
          <img src={quoteBadge} alt="quoteBadge" className="absolute top-14 right-20" />
        </div>
        <div className="collosal-tagline text-white text-[20px] row-span-1 mt-10">
          <p>{name}</p>
          <p className="collosal-description text-xs">{company}</p>
        </div>
      </div>
      <div className="row-span-1 leading-[32px] text-sm font-medium mt-12">
        <q>{quote}</q>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  avatar: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

TestimonialCard.defaultProps = {
  avatar: avatar1,
  name: "Name",
  company: "Company.",
  quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quidem. Nulla velit ea iure obcaecati, blanditiis reprehenderit quibu?",
};

export default TestimonialCard;
