import { useRef, useEffect } from "react";
import Slider from "react-slick";
import TestimonialCard from "../minor-component/testimonialCard";
import avatar1 from "../assets/avatar1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sliders() {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(1);
    }
  }, []);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "30%",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    arrows: false,
    focusOnSelect: true,
  };
  const handleClick = () => {
    sliderRef.current.slickGoTo(1);
  };
  return (
    <div className="w-[85%] m-auto">
      <Slider {...settings} ref={sliderRef}>
        <div onClick={handleClick}>
          <TestimonialCard avatar={avatar1} />
        </div>
        <div>
          <TestimonialCard avatar={avatar1} name={"pantek"} />
        </div>
        <div>
          <TestimonialCard avatar={avatar1} />
        </div>
      </Slider>
    </div>
  );
}

export default Sliders;
