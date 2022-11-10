import React from "react";
import "./RankList.scss";
import medalOne from "~/assets/rank-icon/medal-one.png";
import medalTwo from "~/assets/rank-icon/medal-two.png";
import medalThree from "~/assets/rank-icon/medal-three.png";
import fourTh from "~/assets/rank-icon/4.png";
import fiveTh from "~/assets/rank-icon/5.png";
import sixTh from "~/assets/rank-icon/6.png";
import sevenTh from "~/assets/rank-icon/7.png";
import eightTh from "~/assets/rank-icon/8.png";
import nineTh from "~/assets/rank-icon/9.png";
import tenTh from "~/assets/rank-icon/10.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faBook } from "@fortawesome/free-solid-svg-icons";
import RankOther from "./RankOther";

export default function RankList(props) {

  const {title,icon} = props;

  return (
    <div className="rank-wrapper">
      <div className="rank-title">{title}</div>
      <div className="rank-top-1">
        <img src={medalOne} alt="ảnh nè" className="rank-medal" />
        <div className="top-1-contain">
          <div className="top-1-name">Đạo Giới Thiên Hạ</div>
          <div className="top-1-number">
            <FontAwesomeIcon icon={icon} className="number-icon" />
            26000
          </div>

          <div className="top-1-author">
            <FontAwesomeIcon icon={faUserPen} className="number-icon" />
            Dạ Nguyệt Hành
          </div>

          <div className="top-1-genre">
            <FontAwesomeIcon icon={faBook} className="number-icon" />
            Tien Hiep
          </div>
        </div>
        <div className="top-1-img">
          <img
            src="https://static.cdnno.com/poster/dao-gioi-thien-ha/150.jpg?1596525418"
            alt="ảnh nè"
            className=""
          />
          <span className="book-shadow"></span>
        </div>
      </div>
      <RankOther img={medalTwo} name={"Vạn Cổ Thần Đế Vạn Cổ Thần Đế Vạn Cổ Thần Đế"} number={"1.001"} />
      <RankOther img={medalThree} name={"Vạn Cổ Thần Đế"} number={"1.001"} />
      <RankOther img={fourTh} name={"Vạn Cổ Thần Đế"} number={"1.001"} />
      <RankOther img={fiveTh} name={"Vạn Cổ Thần Đế"} number={"1.001"} />
      <RankOther img={sixTh} name={"Vạn Cổ Thần Đế"} number={"1.001"} />
      <RankOther img={sevenTh} name={"Vạn Cổ Thần Đế"} number={"1.001"} />
      <RankOther img={eightTh} name={"Vạn Cổ Thần Đế"} number={"1.001"} />
      <RankOther img={nineTh} name={"Vạn Cổ Thần Đế"} number={"1.001"} />
      <RankOther img={tenTh} name={"Vạn Cổ Thần Đế"} number={"1.001"} />
    </div>
  );
}
