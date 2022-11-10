import React, { useState } from "react";
import Comments from "~/components/Comments";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import "./CommentStory.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
export default function CommentStory() {
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
  const [textArea,setTextArea] = useState('');
  return (
    <div className="cmt-story-wrapper">
      <div className="cmt-story-left">
        <div className="cmt-story-header">
          <div className="cmt-story-count"> 137 Bình Luận</div>
          <div className="cmt-story-option">
            <select>
              <option>Mới Nhất</option>
              <option>Lượt Thích</option>
            </select>
          </div>
        </div>
        <div className="cmt-box">
          <img src="https://static.cdnno.com/user/default/100.jpg" alt="" />
          <div className="cmt-box-textArea">
            <TextareaAutosize
              className="_textArea1"
              minRows={3}
              placeholder="Binh luan của bạn về truyện này là gì?"
              onChange={(e) => setTextArea(e.target.value)}
              value={textArea}
            />
            <button className="_btnSend">
              <FontAwesomeIcon
                icon={faPaperPlane}
                minRow={1}
                className="_btnSend-icon"
                onClick={()=> setTextArea('')}
              />
            </button>
          </div>
        </div>
        <div className="cmt-story-cmt">
          <Comments datas={datas} hide={true} />
        </div>
      </div>
    </div>
  );
}
