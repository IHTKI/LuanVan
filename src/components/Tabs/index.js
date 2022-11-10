import React, { useState } from "react";
import CommentStory from "./CommentStory";
import Introduce from "./Introduce";
import ListChap from "./ListChap";
import Rate from "./Rate";
import "./Tabs.scss";

export default function Tabs() {
  const [activity, setActivity] = useState(1);

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
          <Introduce />
        </div>
        <div className={activity === 2 ? "activity-contain" : "tab-hide"}>
          <Rate />
        </div>
        <div className={activity === 3 ? "activity-contain" : "tab-hide"}>
          <ListChap />
        </div>
        <div className={activity === 4 ? "activity-contain" : "tab-hide"}>
          <CommentStory />
        </div>
      </div>
    </div>
  );
}
