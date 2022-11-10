import React, { useState } from "react";
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
export default function Setting(props) {
  const [select, SetSelect] = useState(0);
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
    handleChangeLineHeight
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
    const number = (value - 0.1);
    handleChangeLineHeight(number);
  }
  const handleAddLineHeight = () => {
    const value = settingReading.lineHeight;
    const number = (value + 0.1);
    handleChangeLineHeight(number);
  }
  return (
    <div>
      <div className="read-btn-ul">
        <div className="read-btn-li">
          <FontAwesomeIcon icon={faBars} onClick={() => handleChange(1)} />
        </div>
        <div className="read-btn-li">
          <FontAwesomeIcon icon={faGear} onClick={() => handleChange(2)} />
        </div>
        <div className="read-btn-li">
          <FontAwesomeIcon
            icon={faCircleRight}
            onClick={() => handleChange(3)}
          />
        </div>
        <div className="read-btn-li">
          <FontAwesomeIcon
            icon={faCircleLeft}
            onClick={() => handleChange(4)}
          />
        </div>
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
              <div className="_text">{(settingReading.lineHeight).toFixed(1)}</div>
              <btn className="_btn" onClick={handleAddLineHeight}>
                <AiOutlinePlusCircle className="_icon" />
              </btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
