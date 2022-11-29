import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faStar } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import "./Rate.scss";
import Comments from "~/components/Comments";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Rate(props) {
  const { idStory } = props;
  const navigation = useNavigate();

  const [datas, setDatas] = useState("");

  const [rateChar, setRateChar] = useState(0);
  const [rateWorld, setRateWorld] = useState(0);
  const [rateContain, setRateContain] = useState(0);

  const [pointTotal, setPointTotal] = useState(0);
  const [pointChar, setPointChar] = useState(0);
  const [pointWorld, setPointWorld] = useState(0);
  const [pointContain, setPointContain] = useState(0);

  const [textArea, setTextArea] = useState("");
  const textAreaRef = useRef(null);
  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };
  useEffect(resizeTextArea, [textArea]);

  useEffect(() => {
    const URL = "http://localhost:8000/rate/get";
    const data = {
      idStory: idStory.slice(3),
      idReader: localStorage.getItem("readerId"),
    };

    axios.post(URL, data).then((res) => {
      //console.log(res.data);
      setDatas(res.data);
      handleData(res.data);
    });
  }, [idStory]);
  //console.log(datas)
  
  const handleData = (array) => {
    //console.log("123123123")
    const idReader = localStorage.getItem("readerId");
    const rateReader = array.filter((item) => {
      return item.idReader._id === idReader;
    });
    setTextArea(rateReader[0].contain);
    setRateChar(rateReader[0].rateChar);
    setRateWorld(rateReader[0].rateWorld);
    setRateContain(rateReader[0].rateContain);

    const pointChar = array.reduce(function (accumulator, data) {
      return accumulator + data.rateChar;
    }, 0);
    setPointChar((pointChar / array.length).toFixed(1));
    const pointWorld = array.reduce(function (accumulator, data) {
      return accumulator + data.rateWorld;
    }, 0);
    setPointWorld((pointWorld / array.length).toFixed(1));
    const pointContain = array.reduce(function (accumulator, data) {
      return accumulator + data.rateContain;
    }, 0);
    setPointContain((pointContain / array.length).toFixed(1));

    const pointTotal =
      Number(
        pointChar / array.length +
          pointContain / array.length +
          pointWorld / array.length
      ) / 3;

    setPointTotal((pointTotal).toFixed(1));
    //console.log(pointTotal)
  };

  //console.log(localStorage.getItem("chapter"))

  const handleSubmit = () => {
    //setTextArea("");
    if (localStorage.getItem("readerId") !== null) {
      if (textArea !== "") {
        const newRate = {
          idStory: idStory.slice(3),
          idReader: localStorage.getItem("readerId"),
          contain: textArea,
          rateChar: rateChar,
          rateContain: rateContain,
          rateWorld: rateWorld,
        };

        axios.post("http://localhost:8000/rate/add", newRate).then((res) => {
          alert(res.data);
          //alert("Thanh cong");
          //setTextArea("");
        });
      } else {
        alert("Nhap noi dung");
      }
    } else {
      navigation("/reader/login");
    }
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
                value={rateChar}
                onChange={(e) => setRateChar(e.target.value)}
                className="_range"
              />
              <div className="_point">{rateChar}</div>
            </div>

            <div className="box-rating-li">
              <div className="_content">Nội Dung Cốt Truyện:</div>
              <input
                type="range"
                min="0"
                max="5"
                step={0.5}
                value={rateContain}
                onChange={(e) => setRateContain(e.target.value)}
                className="_range"
              />
              <div className="_point">{rateContain}</div>
            </div>

            <div className="box-rating-li">
              <div className="_content">Bố Cục Thế Giới:</div>
              <input
                type="range"
                min="0"
                max="5"
                step={0.5}
                value={rateWorld}
                onChange={(e) => setRateWorld(e.target.value)}
                className="_range"
              />
              <div className="_point">{rateWorld}</div>
            </div>
          </div>
          <div className="box-textBox">
            <textarea
              className="_textArea"
              placeholder="Đánh giá của bạn về truyện này là gì?"
              onChange={(e) => setTextArea(e.target.value)}
              value={textArea ? textArea : ""}
              ref={textAreaRef}
            />
            <button className="_btnSend" onClick={handleSubmit}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
        <div className="rate-left-ul">
          <Comments datas={datas && datas !== "" ? datas : ""} />
        </div>
      </div>
      <div className="rate-right">
        <div className="rate-right-ul">
          <div className="rate-right-header">
            <span className="_text">
              Đã có {datas && datas.length ? datas.length : ""} lượt đánh giá
            </span>
            <div className="_star">
              <FontAwesomeIcon
                icon={faStar}
                className={pointTotal >= 1 ? "star-active" : ""}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={pointTotal >= 2 ? "star-active" : ""}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={pointTotal >= 3 ? "star-active" : ""}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={pointTotal >= 4 ? "star-active" : ""}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={pointTotal >= 5 ? "star-active" : ""}
              />
            </div>
            <span className="_point">{pointTotal}</span>
          </div>
          <div className="rate-right-li">
            <span className="_text">Tính cánh nhân vật</span>
            <div className="_star">
              <FontAwesomeIcon
                icon={faStar}
                className={pointTotal >= 1 ? "star-active" : ""}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={pointTotal >= 2 ? "star-active" : ""}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={pointTotal >= 3 ? "star-active" : ""}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={pointTotal >= 4 ? "star-active" : ""}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={pointTotal >= 5 ? "star-active" : ""}
              />
            </div>
            <span className="_point">{pointChar}</span>
          </div>
          <div className="rate-right-li">
            <span className="_text">Nội dung cốt truyện</span>
            <div className="_star">
              <FontAwesomeIcon
                icon={faStar}
                className={pointTotal >= 1 ? "star-active" : ""}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={pointTotal >= 2 ? "star-active" : ""}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={pointTotal >= 3 ? "star-active" : ""}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={pointTotal >= 4 ? "star-active" : ""}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={pointTotal >= 5 ? "star-active" : ""}
              />
            </div>
            <span className="_point">{pointContain}</span>
          </div>
          <div className="rate-right-li">
            <span className="_text">Bối cảnh thế giới</span>
            <div className="_star">
              <FontAwesomeIcon
                icon={faStar}
                className={pointTotal >= 1 ? "star-active" : ""}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={pointTotal >= 2 ? "star-active" : ""}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={pointTotal >= 3 ? "star-active" : ""}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={pointTotal >= 4 ? "star-active" : ""}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={pointTotal >= 5 ? "star-active" : ""}
              />
            </div>
            <span className="_point">{pointWorld}</span>
          </div>
        </div>
        <div className="rate-right-note">
          <div className="note-header">Lưu ý khi đánh giá:</div>
          <div className="note-ul">
            <div className="note-li">
              1. Không được dẫn link hoặc nhắc đến website khác
            </div>
            <div className="note-li">
              2. Không được có những từ ngữ gay gắt, đả kích, xúc phạm người
              khác
            </div>
            <div className="note-li">
              3. Đánh giá hoặc bình luận không liên quan tới truyện sẽ bị xóa
            </div>
            <div className="note-li">
              4. Đánh giá hoặc bình luận chê truyện một cách chung chung không
              mang lại giá trị cho người đọc sẽ bị xóa
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
