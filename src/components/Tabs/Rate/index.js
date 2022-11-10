import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faStar } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import "./Rate.scss";
import Comments from "~/components/Comments";
export default function Rate() {
  const datas = [
    {
      id: 1,
      cmt: "Truyện hay vcl",
    },
    {
      id: 2,
      cmt: "Truyện hay",
    },
    {
      id: 3,
      cmt: "Truyện siêu hay vcl",
    },
    {
      id: 4,
      cmt: "Truyện dở vcl",
    },
    {
      id: 5,
      cmt: "Truyện hay quá",
    },
    {
      id: 6,
      cmt: "Truyện hay vãi đạn",
    },
  ];
  const [point, setPoint] = useState(0);
  const [textArea, setTextArea] = useState("");
  const textAreaRef = useRef(null);
  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };
  useEffect(resizeTextArea, [textArea]);

  const handleSubmit = () => {
    setTextArea("");
  };

  return (
    <div className="rate-wrapper">
      <div className="rate-left">
        <div className="rate-left-box">
          <div className="box-rating">
            <div className="box-rating-li">
              <div className="_content">Tính Cách Nhân Vật:</div>
              <input
                type="range"
                min="0"
                max="5"
                step={0.5}
                value={point}
                onChange={(e) => setPoint(e.target.value)}
                className="_range"
              />
              <div className="_point">{point}</div>
            </div>

            <div className="box-rating-li">
              <div className="_content">Nội Dung Cốt Truyện:</div>
              <input
                type="range"
                min="0"
                max="5"
                step={0.5}
                value={point}
                onChange={(e) => setPoint(e.target.value)}
                className="_range"
              />
              <div className="_point">{point}</div>
            </div>

            <div className="box-rating-li">
              <div className="_content">Bố Cục Thế Giới:</div>
              <input
                type="range"
                min="0"
                max="5"
                step={0.5}
                value={point}
                onChange={(e) => setPoint(e.target.value)}
                className="_range"
              />
              <div className="_point">{point}</div>
            </div>
          </div>
          <div className="box-textBox">
            <textarea
              className="_textArea"
              placeholder="Đánh giá của bạn về truyện này là gì?"
              onChange={(e) => setTextArea(e.target.value)}
              value={textArea}
              ref={textAreaRef}
            />
            <button className="_btnSend" onClick={handleSubmit}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
        <div className="rate-left-ul">
          <div className="rate-option">
            <select>
              <option>Mới Nhất</option>
              <option>Lượt Thích</option>
            </select>
          </div>
          <Comments datas={datas}/>
        </div>
      </div>
      <div className="rate-right">
        <div className="rate-right-ul">

          <div className="rate-right-header">
            <span className="_text">Đã có 6 lượt đánh giá</span>
            <div className="_star">
              <FontAwesomeIcon icon={faStar} className="star-active"/>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <span className="_point">5</span>
          </div>
          <div className="rate-right-li">
            <span className="_text">Tính cánh nhân vật</span>
            <div className="_star">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <span className="_point">5</span>
          </div>
          <div className="rate-right-li">
            <span className="_text">Nội dung cốt truyện</span>
            <div className="_star">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <span className="_point">5</span>
          </div>
          <div className="rate-right-li">
            <span className="_text">Bối cảnh thế giới</span>
            <div className="_star">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <span className="_point">5</span>
          </div>
        </div>
        <div className="rate-right-note">
          <div className="note-header">
            Lưu ý khi đánh giá:
          </div>
          <div className="note-ul">
            <div className="note-li">
            1. Không được dẫn link hoặc nhắc đến website khác
            </div>
            <div className="note-li">
            2. Không được có những từ ngữ gay gắt, đả kích, xúc phạm người khác
            </div>
            <div className="note-li">
            3. Đánh giá hoặc bình luận không liên quan tới truyện sẽ bị xóa
            </div>
            <div className="note-li">
            4. Đánh giá hoặc bình luận chê truyện một cách chung chung không mang lại giá trị cho người đọc sẽ bị xóa
            </div>
            <div className="note-li">
            5. Đánh giá có điểm số sai lệch với nội dung sẽ bị xóa
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
