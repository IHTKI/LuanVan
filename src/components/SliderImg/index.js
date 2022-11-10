import React from "react";
import "./Slider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import background1 from "~/assets/slider/background1.jpg";
import background2 from "~/assets/slider/background2.jpg";
import background3 from "~/assets/slider/background3.jpg";
import background4 from "~/assets/slider/background4.jpg";

export default function SliderImg() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const data = [
    "Tôi có một bàn thờ may mắn",
    "Bậc thầy thẻ bài Ngôi sao cuối cùng",
    "Sứ mệnh Starlink",
    "Trồng trọt sao cho khoa học",
  ];
  return (
    <div className="slider">
      <Slider
        {...settings}
        customPaging={(i) => {
          return <div className="test">{data[i]}</div>;
        }}
        dotsClass="slick-dots custom-indicator"
      >
        <div className="slider-item">
          <img src={background1} alt="anh ne" className="slider-img" />
        </div>
        <div className="slider-item">
          <img src={background2} alt="anh ne" className="slider-img" />
        </div>
        <div className="slider-item">
          <img src={background3} alt="anh ne" className="slider-img" />
        </div>
        <div className="slider-item">
          <img src={background4} alt="anh ne" className="slider-img" />
        </div>
      </Slider>
    </div>
  );
}
