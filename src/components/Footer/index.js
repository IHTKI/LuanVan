import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo/logo.png";
import facebook from "../../assets/facebook.png";


export default function Footer() {
  return (
    <div className="footer-wrapper">
      <img src={logo} alt="" />
      <div className="text">
        Mê Truyện Chữ là nền tảng mở trực tuyến, miễn phí đọc truyện chữ được
        convert hoặc dịch kỹ lưỡng, do các converter và dịch giả đóng góp, rất
        nhiều truyện hay và nổi bật được cập nhật nhanh nhất với đủ các thể loại
        tiên hiệp, kiếm hiệp, huyền ảo ...
      </div>
      <div className="icon">
        <img src="https://phepthuat.com/images/icons/social/facebook.svg" alt='' className="_icon"/>
        <img src="https://phepthuat.com/images/icons/social/youtube.svg" alt='' className="_icon"/>

        <img src="https://phepthuat.com/images/icons/social/google-plus.svg" alt='' className="_icon"/>

        <img src="https://phepthuat.com/images/icons/social/twitter.svg" alt='' className="_icon"/>

        <img src="https://phepthuat.com/images/icons/social/yahoo.svg" alt='' className="_icon"/>

      </div>
    </div>
  );
}
