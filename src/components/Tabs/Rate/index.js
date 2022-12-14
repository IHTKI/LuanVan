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
              <div className="_content">T??nh C??ch Nh??n V???t:</div>
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
              <div className="_content">N???i Dung C???t Truy???n:</div>
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
              <div className="_content">B??? C???c Th??? Gi???i:</div>
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
              placeholder="????nh gi?? c???a b???n v??? truy???n n??y l?? g???"
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
              ???? c?? {datas && datas.length ? datas.length : ""} l?????t ????nh gi??
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
            <span className="_text">T??nh c??nh nh??n v???t</span>
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
            <span className="_text">N???i dung c???t truy???n</span>
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
            <span className="_text">B???i c???nh th??? gi???i</span>
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
          <div className="note-header">L??u ?? khi ????nh gi??:</div>
          <div className="note-ul">
            <div className="note-li">
              1. Kh??ng ???????c d???n link ho???c nh???c ?????n website kh??c
            </div>
            <div className="note-li">
              2. Kh??ng ???????c c?? nh???ng t??? ng??? gay g???t, ????? k??ch, x??c ph???m ng?????i
              kh??c
            </div>
            <div className="note-li">
              3. ????nh gi?? ho???c b??nh lu???n kh??ng li??n quan t???i truy???n s??? b??? x??a
            </div>
            <div className="note-li">
              4. ????nh gi?? ho???c b??nh lu???n ch?? truy???n m???t c??ch chung chung kh??ng
              mang l???i gi?? tr??? cho ng?????i ?????c s??? b??? x??a
            </div>
            <div className="note-li">
              5. ????nh gi?? c?? ??i???m s??? sai l???ch v???i n???i dung s??? b??? x??a
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
