import React, { useEffect, useState } from "react";
import "./Setting.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGear,
  faCircleRight,
  faCircleLeft,
  faBookmark,
  faComment,
  faPalette,
  faFont,
  faTextSize,
} from "@fortawesome/free-solid-svg-icons";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineFontSize,
} from "react-icons/ai";
import { FaTextHeight } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Setting(props) {
  const [select, SetSelect] = useState(0);
  const [audio, setAudio] = useState();
  const handleChange = (number) => {
    if (select === 0 || select !== number) {
      SetSelect(number);
    } else {
      SetSelect(0);
    }
  };
  const {
    handleChangeBG,
    settingBackGround,
    handleChangeFont,
    handleChangeFontSize,
    settingReading,
    handleChangeLineHeight,
    id,
    chapter,
    chapContain,
    chapTotal,
  } = props;
  //console.log(settingReading.fontSize);
  const handleAdd = () => {
    const value = settingReading.fontSize;
    handleChangeFontSize(value + 1);
  };
  const handleSub = () => {
    const value = settingReading.fontSize;
    handleChangeFontSize(value - 1);
  };
  const handleSubLineHeight = () => {
    const value = settingReading.lineHeight;
    const number = value - 0.1;
    handleChangeLineHeight(number);
  };
  const handleAddLineHeight = () => {
    const value = settingReading.lineHeight;
    const number = value + 0.1;
    handleChangeLineHeight(number);
  };
  const nextChapURL = `/story/id:${id.slice(3)}/chapter:${
    Number(chapter.slice(8)) + 1
  }`;
  const preChapURL = `/story/id:${id.slice(3)}/chapter:${
    Number(chapter.slice(8)) - 1
  }`;

  const handleNextClick = () => {
    
  };

  const handleAudio = () => {
    //console.log(1);
    const data = {
      text: "- Be be…be be…be be… Từng tiếng người nhái giọng con dê vang vọng quanh quẩn trong dãy núi vốn dĩ yên tĩnh.Lý Thất Dạ trèo lên trên núi, gió ban đêm thổi vừa mạnh vừa lạnh, nhưng lúc này nó lo lắng đến toát mồ hôi ướt đẫm cả người. Một đứa bé ở độ tuổi mười ba như Lý Thất Dạ, dùng tay chân một mình trèo lên dãy núi, quang cảnh đó giữa màn đêm toát ra một nét rất quái dị, khiến người ta sởn hết cả gai ốc nếu như được chứng kiến.Mặc dù màn đêm tĩnh lặng rất đáng sợ, nhưng trong lòng của Lý Thất Dạ lại nóng như lửa đốt.",
    };

    const headers = {
      "api-key": "Khxxxr1fkbVghS0r1yZ6s1VezOoA5EQZ",
      voice: "banmai",
    };
    axios
      .post("https://api.fpt.ai/hmi/tts/v5", data, {
        headers: headers,
      })
      .then((res) => {
        //console.log(res.data);
        setAudio(res.data.async);
      });
  };
  useEffect(() => {
    //console.log(1)
    const data = {
      chapter: chapter.slice(8),
      idStory: id.slice(3),
      idReader: localStorage.getItem("readerId"),
    };
    //console.log(data)
    const URL = "http://localhost:8000/history/change";
    axios.post(URL, data).then((res) => {
      console.log(res.data);
    });
    //console.log(localStorage.getItem("chapter"));
  }, [chapter]);

  //console.log(Number(chapter.slice(8)) === chapTotal);

  return (
    <div>
      <div className="read-btn-ul">
        <div className="read-btn-li">
          <FontAwesomeIcon icon={faBars} onClick={() => handleChange(1)} />
        </div>
        <div className="read-btn-li">
          <FontAwesomeIcon icon={faGear} onClick={() => handleChange(2)} />
        </div>
        <Link
          to={nextChapURL}
          className={
            Number(chapter.slice(8)) === chapTotal
              ? "read-btn-li block-active"
              : "read-btn-li"
          }
          onClick={handleNextClick}
        >
          <FontAwesomeIcon
            icon={faCircleRight}
            onClick={() => handleChange(3)}
          />
        </Link>
        <Link
          to={preChapURL}
          className={
            Number(chapter.slice(8)) === 1
              ? "read-btn-li block-active"
              : "read-btn-li"
          }
        >
          <FontAwesomeIcon
            icon={faCircleLeft}
            onClick={() => handleChange(4)}
          />
        </Link>
        <div className="read-btn-li">
          <FontAwesomeIcon icon={faBookmark} onClick={() => handleChange(5)} />
        </div>
        <div className="read-btn-li">
          <FontAwesomeIcon icon={faComment} onClick={() => handleChange(6)} />
        </div>
      </div>
      <div className="read-table">
        <div
          className={select === 1 ? "read-chapter activity" : "read-chapter"}
        >
          a
        </div>
        <div
          className={select === 2 ? "read-setting activity" : "read-setting"}
        >
          <span>Cài Đặt</span>
          <div className="read-table-color">
            <div className="read-table-color-title">
              <FontAwesomeIcon icon={faPalette} className="_icon" />
              Màu Nền
            </div>
            <div className="read-color-ul">
              <div
                className={
                  settingBackGround.backgroundColor === "#cbe1cb"
                    ? "read-color-li select color-1"
                    : "read-color-li color-1"
                }
                onClick={() => handleChangeBG("#cbe1cb")}
              ></div>
              <div
                className={
                  settingBackGround.backgroundColor === "#f5ebcd"
                    ? "read-color-li select color-2"
                    : "read-color-li color-2"
                }
                onClick={() => handleChangeBG("#f5ebcd")}
              ></div>
              <div
                className={
                  settingBackGround.backgroundColor === "#bbab90"
                    ? "read-color-li select color-3"
                    : "read-color-li color-3"
                }
                onClick={() => handleChangeBG("#bbab90")}
              ></div>
              <div
                className={
                  settingBackGround.backgroundColor === "#e3e3e3"
                    ? "read-color-li select color-4"
                    : "read-color-li color-4"
                }
                onClick={() => handleChangeBG("#e3e3e3")}
              ></div>
              <div
                className={
                  settingBackGround.backgroundColor === "#e5e3df"
                    ? "read-color-li select color-5"
                    : "read-color-li color-5"
                }
                onClick={() => handleChangeBG("#e5e3df")}
              ></div>
              <div
                className={
                  settingBackGround.backgroundColor === "#e1e8e8"
                    ? "read-color-li select color-6"
                    : "read-color-li color-6"
                }
                onClick={() => handleChangeBG("#e1e8e8")}
              ></div>
              <div
                className={
                  settingBackGround.backgroundColor === "#eae4d3"
                    ? "read-color-li select color-7"
                    : "read-color-li color-7"
                }
                onClick={() => handleChangeBG("#eae4d3")}
              ></div>
              <div
                className={
                  settingBackGround.backgroundColor === "#fff"
                    ? "read-color-li select color-8"
                    : "read-color-li color-8"
                }
                onClick={() => handleChangeBG("#fff")}
              ></div>
            </div>
          </div>
          <div className="table-font">
            <div className="read-table-font-title">
              <FontAwesomeIcon icon={faFont} className="_icon" />
              Font Chữ
            </div>
            <div className="read-font-ul">
              <select onChange={(e) => handleChangeFont(e.target.value)}>
                <option value="Palatino Linotype"> Palatino Linotype</option>
                <option value="Source Sans Pro">Source Sans Pro </option>
                <option value="Segoe UI">Segoe UI</option>
                <option value="Roboto">Roboto</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Arial">Arial</option>
                <option value="Fuzzy Bubbles">Fuzzy Bubbles</option>
              </select>
            </div>
          </div>

          <div className="table-size">
            <div className="read-table-size-title">
              <AiOutlineFontSize className="_icon" />
              Cỡ Chữ
            </div>
            <div className="read-size-ul">
              <btn className="_btn" onClick={handleSub}>
                <AiOutlineMinusCircle className="_icon" />
              </btn>
              <div className="_text">{settingReading.fontSize} px</div>
              <btn className="_btn" onClick={handleAdd}>
                <AiOutlinePlusCircle className="_icon" />
              </btn>
            </div>
          </div>

          <div className="table-size">
            <div className="read-table-size-title">
              <FaTextHeight className="_icon" />
              Dãn Dòng
            </div>
            <div className="read-size-ul">
              <btn className="_btn" onClick={handleSubLineHeight}>
                <AiOutlineMinusCircle className="_icon" />
              </btn>
              <div className="_text">
                {settingReading.lineHeight.toFixed(1)}
              </div>
              <btn className="_btn" onClick={handleAddLineHeight}>
                <AiOutlinePlusCircle className="_icon" />
              </btn>
            </div>
          </div>
        </div>
        <div className={select === 6 ? "read-audio activity" : "read-audio"}>
          a
          <AudioPlayer
            autoPlay
            src={audio}
            //onPlay={(e) => console.log("onPlay")}
            // other props here
          />
        </div>
      </div>
    </div>
  );
}
