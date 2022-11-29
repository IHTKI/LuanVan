import React, { useEffect, useState } from "react";
import Comments from "~/components/Comments";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import "./CommentStory.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { AiTwotoneLike } from "react-icons/ai";
import axios from "axios";

export default function CommentStory(props) {
  const { idStory } = props;
  const idReader = localStorage.getItem("readerId");
  const [cmt, setCmt] = useState("");
 


  const handleSendComment = () => {
    if (textArea !== "") {
      const URL = "http://localhost:8000/comment/add";
      const data = {
        idStory: idStory.slice(3),
        idReader: idReader,
        contain: textArea,
      };
      axios.post(URL, data).then((res) => {
        console.log(res.data);
      });
    } else {
      alert("Nhap nooi dung!");
    }
  };

  useEffect(() => {
    const URL = "http://localhost:8000/comment/get";
    const data = {
      idStory: idStory.slice(3),
    };
    axios.post(URL, data).then((res) => {
      //console.log(res.data)
      setCmt(res.data);
    });
  },[]);

  const handleLikeClick = (id) => {
    if (localStorage.getItem("readerId") !== null) {
      const URL = "http://localhost:8000/comment/like";
      const data = {
        idComment: id,
        idReader: localStorage.getItem("readerId"),
      };
      axios.post(URL, data).then((res) => {
        //console.log(res.data);
        //setCmt(res.data);
        //setRender(preRender => !preRender);
      });
    } else {
      alert("Ban can dng nhap");
    }
  };

  const [textArea, setTextArea] = useState("");
  return (
    <div className="cmt-story-wrapper">
      <div className="cmt-story-left">
        <div className="cmt-story-header">
          <div className="cmt-story-count"> {cmt && cmt.length} Bình Luận</div>
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
            <button className="_btnSend" onClick={handleSendComment}>
              <FontAwesomeIcon
                icon={faPaperPlane}
                minRow={1}
                className="_btnSend-icon"
                onClick={() => setTextArea("")}
              />
            </button>
          </div>
        </div>
        <div className="cmt-story-cmt">
          {cmt && cmt !== ""
            ? cmt.map((data) => {
                return (
                  <div className="cmt_story_wrap">
                    <div className="cmt_story_img">
                      <img src={data.idReader.avatar} alt="" />
                    </div>
                    <div className="cmt_story_content">
                      <div className="cmt_story_userName">
                        {data.idReader.nameUser}
                      </div>
                      <div className="cmt_story_chapter">
                        Đã Đọc: {data.chapRead} Chương
                      </div>
                      <div className="cmt_story_contain">{data.contain}</div>
                      <div className="cmt_story_like">
                        <AiTwotoneLike
                          className={
                            data.idLike.some((item) => item === idReader)
                              ? "__icon__like like-active"
                              : "__icon__like"
                          }
                          onClick={() => handleLikeClick(data._id)}
                        />
                        <span>{data.like}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      <div className="cmt-story-right">
      <div className="rate-right-note">
          <div className="note-header">Lưu ý khi bình luận:</div>
          <div className="note-ul">
            <div className="note-li">
              1. Không được dẫn link hoặc nhắc đến website khác
            </div>
            <div className="note-li">
              2. Không được có những từ ngữ gay gắt, đả kích, xúc phạm người
              khác
            </div>
            <div className="note-li">
              3. Bình luận không liên quan tới truyện sẽ bị xóa
            </div>
            <div className="note-li">
              4. Bình luận chê truyện một cách chung chung không
              mang lại giá trị cho người đọc sẽ bị xóa
            </div>
            <div className="note-li">
              5. Bình luận mang tính khiếm nhã, xúc phạm sẽ bị xóa.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
