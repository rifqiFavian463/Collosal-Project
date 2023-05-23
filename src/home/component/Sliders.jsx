import { useRef, useEffect } from "react";
import Slider from "react-slick";
import TestimonialCard from "../../minor-component/testimonial-card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";

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
    centerPadding: "26%",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    arrows: false,
    focusOnSelect: true,
  };

  return (
    <div className="w-[85%] m-auto">
      <Slider {...settings} ref={sliderRef}>
        <div>
          <TestimonialCard
            avatar={avatar2}
            name={"Courtney Henry"}
            company={"Biffco Enterprises Ltd."}
            quote={"Very easy to use. I made back the purchase price in just 48 hours! It's great. It's is both attractive and highly adaptable."}
          />
        </div>
        <div>
          <TestimonialCard
            avatar={avatar1}
            name={"Esther Howard"}
            company={"Abstergo Ltd."}
            quote={"Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."}
          />
        </div>
        <div>
          <TestimonialCard
            avatar={avatar3}
            name={"Ronald Richards"}
            company={"Barone LLC."}
            quote={"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Sliders;
