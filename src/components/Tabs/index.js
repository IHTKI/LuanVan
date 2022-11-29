import React, { useState } from "react";
import CommentStory from "./CommentStory";
import Introduce from "./Introduce";
import ListChap from "./ListChap";
import Rate from "./Rate";
import "./Tabs.scss";

export default function Tabs(props) {
  const [activity, setActivity] = useState(1);
  const {idStory} = props;
  const handleClick = (index) => {
    setActivity(index);
  };

  return (
    <div className="tabs-wrapper">
      <div className="bloc-tabs">
        <div
          className={activity === 1 ? "tab activity-tabs" : "tab"}
          onClick={() => handleClick(1)}
        >
          Giới Thiệu
        </div>
        <div
          className={activity === 2 ? "tab activity-tabs" : "tab"}
          onClick={() => handleClick(2)}
        >
          Đánh Giá
        </div>
        <div
          className={activity === 3 ? "tab activity-tabs" : "tab"}
          onClick={() => handleClick(3)}
        >
          Danh Sách Chương
        </div>
        <div
          className={activity === 4 ? "tab activity-tabs" : "tab"}
          onClick={() => handleClick(4)}
        >
          Bình Luận
        </div>
      </div>
      <div className="contain-tabs">
        <div className={activity === 1 ? "activity-contain" : "tab-hide"}>
          <Introduce idStory={idStory}/>
        </div>
        <div className={activity === 2 ? "activity-contain" : "tab-hide"}>
          <Rate idStory={idStory}/>
        </div>
        <div className={activity === 3 ? "activity-contain" : "tab-hide"}>
          <ListChap idStory={idStory}/>
        </div>
        <div className={activity === 4 ? "activity-contain" : "tab-hide"}>
          <CommentStory idStory={idStory}/>
        </div>
      </div>
    </div>
  );
}
