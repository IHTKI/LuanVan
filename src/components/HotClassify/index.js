import React from "react";
import "./HotClassify.scss";
export default function HotClassify(props) {
  const { mgright, img, css } = props;

  return (
    <div className={mgright ? "hot-classify" : "hot-classify mgl-right"}>
      <div className="hot-classify-content">
        Huyền Huyễn
        <img
          src={img}
          alt=""
          className={
            css === 1
              ? "classify-content-icon css-1"
              : css === 2
              ? "classify-content-icon css-2"
              : css === 3 
              ? "classify-content-icon css-3" 
              : css === 4
              ? "classify-content-icon css-4"
              : css === 5 
              ? "classify-content-icon css-5"
              : "classify-content-icon css-6"
          }
        />
      </div>
      <div className="hot-classify-story">
        <div className="classify-story-item">
          <div className="story-item-genre">「 Huyền Huyễn 」</div>
          <div className="story-item-name"> Vũ Động Càn Khôn</div>
        </div>
        <div className="classify-story-item">
          <div className="story-item-genre">「 Huyền Huyễn 」</div>
          <div className="story-item-name"> Vô Thượng Thần Đế</div>
        </div>
        <div className="classify-story-item">
          <div className="story-item-genre">「 Huyền Huyễn 」</div>
          <div className="story-item-name"> Đại Chúa Tế</div>
        </div>
        <div className="classify-story-item">
          <div className="story-item-genre">「 Huyền Huyễn 」</div>
          <div className="story-item-name"> Vô Địch Kiếm Vực</div>
        </div>
        <div className="classify-story-item">
          <div className="story-item-genre">「 Huyền Huyễn 」</div>
          <div className="story-item-name"> Vũ Động Càn Khôn</div>
        </div>
      </div>
    </div>
  );
}
