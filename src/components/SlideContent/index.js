import React, { useState } from "react";
import Slider from "react-slick";
import "./SlideContent.scss";
export default function SlideContent() {
  const imgs = [
    "https://bookcover.yuewen.com/qdbimg/349573/1031940621/150",
    "https://bookcover.yuewen.com/qdbimg/349573/1029006481/150",
    "https://bookcover.yuewen.com/qdbimg/349573/1031777108/150",
    "https://bookcover.yuewen.com/qdbimg/349573/1031777108/150",
  ];

  const text = [
    "Vạn Cổ Thần Đế",
    "Siêu Vip Pro",
    "Ahihi Đồ Ngốc",
    "Lêu Lêu Con Gà",
  ];
  const settings = {
    infinite: true,
    className: "center",
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setImgIndex(next),
  };

  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div className="outstanding-slide">
      <h3 className="outstanding-slide-text">Nổi Bật</h3>
      <div className="out-standing-work">
        <Slider {...settings}>
          {imgs.map((img, idx) => (
            <div
              key={idx}
              className={
                idx === imgIndex // index = 0 => idx =0 active ? idx = 3
                  ? "slide-active"
                  : imgIndex !== imgs.length - 1
                  ? idx === imgIndex + 1
                    ? "slide-next"
                    : "slide-pre"
                  : idx === 0
                  ? "slide-next"
                  : "slide-pre"
              }
            >
              <img src={img} alt="anh ne" />
            </div>
          ))}
        </Slider>

        <div className="slide-text-active">
          <div className="slide-text-name">{text[imgIndex]}</div>
          <div className="slide-text-author">Phi Thiên Ngư</div>
          <div className="slide-text-doc">101.909</div>
          <div className="slide-text-intro">
            Ta có nhất kiếm, ra khỏi vỏ tức vô địch!
          </div>
        </div>

        <button className="btn-click-doc">Xem Thử</button>
      </div>
    </div>
  );
}
