import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faThumbsUp,
  faReply,
  faStar,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./Comment.scss";

import TextareaAutosize from "@mui/base/TextareaAutosize";
export default function Comment(props) {
  const {data,hide} = props;
  const [rep, setRep] = useState(false);
  const [seenRep, setSeenRep] = useState(false);
  const [textArea, setTextArea] = useState("");

  const handleSubmit = () => {
    setTextArea("");
  };

  const handleRep = () => {
    setRep(true);
    setSeenRep(true);
  };

  const handleHideRep = () => {
    setRep(false);
  }

  console.log(rep);
  return (
    <div className="cmt-wrapper">
      <div className="cmt-user">
        <img
          src="https://facepic.qidian.com/qd_face/349573/a9639927/0"
          alt=""
        />
        <div className="cmt-user-lv">Cấp 1</div>
      </div>
      <div className="cmt-contain">
        <div className="cmt-nameUser"> Khiêm Siu Đẹp Trai</div>
        <div className="cmt-rating">
          {!hide ? (
          <div className="cmt-rating-star">
            <div className="cmt-rating-ul">
              <FontAwesomeIcon icon={faStar} className="star-activity hw-15" />
              <FontAwesomeIcon icon={faStar} className="star-activity hw-15" />
              <FontAwesomeIcon icon={faStar} className="star-activity hw-15" />
              <FontAwesomeIcon icon={faStar} className="star-activity hw-15" />
              <FontAwesomeIcon icon={faStar} className="hw-15" />
            </div>

            <span>5</span>
          </div>
          ) : ""}
          <div className="cmt-rating-chapReading">
            <FontAwesomeIcon icon={faBarsStaggered} className="hw-15" />
            <span>Đã đọc: 1222 Chương</span>
          </div>
        </div>
        <div className="cmt-text">
          {data.cmt}
        </div>
        <div className="cmt-rep">
          {!rep ? (
            <div className="cmt-rep-text" onClick={handleRep}>
              Xem 100 Câu Trả Lời
            </div>
          ) : (
            <div></div>
          )}

          <div className="cmt-btn">
            <div className="cmt-btn-like">
              <FontAwesomeIcon icon={faThumbsUp} className="hw-15" />
              100
            </div>
            <div
              className={seenRep ? "cmt-btn-rep btn-active" : "cmt-btn-rep"}
              onClick={() => setSeenRep(true)}
            >
              <FontAwesomeIcon icon={faReply} className="hw-15 " />
              Trả Lời
            </div>
          </div>
        </div>

          <div className="cmt-rep-ul">
            {rep ? (
              <div>
                <div className="cmt-rep-li">
                  <div className="cmt-user">
                    <img
                      src="https://facepic.qidian.com/qd_face/349573/a9639927/0"
                      alt=""
                    />
                    <div className="cmt-user-lv">Cấp 1</div>
                  </div>
                  <div className="cmt-contain">
                    <div className="cmt-nameUser fs-15">
                      {" "}
                      Khiêm Siu Đẹp Trai
                    </div>
                    <div className="cmt-text">Comment hay vcl.</div>
                    <div className="cmt-repLi">
                      <FontAwesomeIcon icon={faThumbsUp} className="mgl-5" />
                      12
                    </div>
                  </div>
                </div>

                <div className="cmt-rep-select">
                  <div className="rep-select-more">Xem thêm trả lời</div>
                  <div
                    className="rep-select-hide"
                    onClick={handleHideRep}
                  >
                    Ẩn trả lời
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}

            {seenRep ? (
              <div className="cmt-replay">
                <div className="cmt-user">
                  <img
                    src="https://facepic.qidian.com/qd_face/349573/a9639927/0"
                    alt=""
                  />
                  <div className="cmt-user-lv">Cấp 1</div>
                </div>
                <div className="cmt-replay-text">
                  <div className="_border">
                    <TextareaAutosize
                      className="_textArea1"
                      minRows={3}
                      placeholder="Đánh giá của bạn về truyện này là gì?"
                      onChange={(e) => setTextArea(e.target.value)}
                      value={textArea}
                    />
                  </div>
                  <button className="_btnSend">
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      minRow={1}
                      className="_btnSend-icon"
                      onClick={handleSubmit}
                    />
                  </button>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
      </div>
    </div>
  );
}
