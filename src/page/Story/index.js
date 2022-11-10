import React from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBookmark,
  faHeart,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import "./Story.scss";
import Tabs from "~/components/Tabs";
export default function Story() {
  return (
    <div className="_story-wrapper">
      <Header />
      <Sidebar />
      <div className="_story-container">
        <img
          src="https://static.cdnno.com/storage/topbox/8d3865b85f81854a4b1149212a925b82.jpg"
          alt=""
          className="_img-background"
        />
        <div className="_story-contain">
          <div className="_story-information">
            <div className="_story-information-1">
              <img
                src="https://static.cdnno.com/poster/van-co-than-de/300.jpg?1585205583"
                alt=""
              />
              <div className="_story-title">
                <div className="_story-name">Vạn Cổ Thần Đế</div>
                <div className="_story-type">
                  <div className="_story-author"> Phi Thiên Ngư </div>
                  <div className="_story-status"> Đang Ra </div>
                  <div className="_story-genre"> Huyền Huyễn </div>
                </div>
                <div className="_story-detail">
                  <div className="_story-chap">
                    3256
                    <span>Chương</span>
                  </div>

                  <div className="_story-read">
                    20.3 M<span>Lượt Đọc</span>
                  </div>
                  <div className="_story-keep">
                    9000
                    <span>Cất Giữ</span>
                  </div>
                  <div className="_story-speed">
                    14
                    <span>Chương/Tuần</span>
                  </div>
                </div>
                <div className="_story-rate">
                  <FontAwesomeIcon icon={faStar} className="_story-rate-icon" />
                  <FontAwesomeIcon icon={faStar} className="_story-rate-icon" />
                  <FontAwesomeIcon icon={faStar} className="_story-rate-icon" />
                  <FontAwesomeIcon icon={faStar} className="_story-rate-icon" />
                  <FontAwesomeIcon icon={faStar} className="_story-rate-icon" />
                  <div className="_story-rate-point">
                    {" "}
                    <span>4.74</span>/5 (577 Đánh Giá)
                  </div>
                </div>
                <div className="_story-btn">
                  <div className="_story-btn-read">
                    <FontAwesomeIcon icon={faBookOpen} />
                    Đọc Truyện
                  </div>
                  <div className="_story-btn-tick">
                    <FontAwesomeIcon icon={faBookmark} />
                    Đánh Dấu
                  </div>
                  <div className="_story-btn-heart">
                    <FontAwesomeIcon icon={faHeart} />
                    Đề Cử
                  </div>
                </div>
              </div>
            </div>
            <div className="_story-information-2">
              <Tabs />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
