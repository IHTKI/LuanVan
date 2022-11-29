import React, { useEffect, useState } from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";
import header from "~/assets/header.png";
import start from "~/assets/start.png";

import "./Read.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faFilePen,
  faHeading,
} from "@fortawesome/free-solid-svg-icons";
import Setting from "./Setting";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Read() {
  const { chapter,id } = useParams();
  //const [chap, setChap] = useState([]);
  const [data, setData] = useState();
  const [show,setShow] = useState(true)
  //const [readChap, setReadChap] = useState(chapter.slice(8));
  
  useEffect(() => {
    const URL = "http://localhost:8000/chap/get";
    const newdata = {
      idStory: id.slice(3),
      chapter: chapter.slice(8),
    }
    axios.post(URL,newdata).then((res) => {
      //console.log(res.data)
      const id = localStorage.getItem("readerId")
      if(res.data[0].status === "open" || (res.data[0].readerOpen).some((element)=> element === id)) {
        //console.log(1)
        setShow(true)
        
      } else {
        //console.log(2)
        setShow(false)
      }
      setData(res.data);
      
    });
  }, [id,chapter]);

  //console.log(data)

  const handleOpenChap = () => {
    if(localStorage.getItem("readerId") === null){
      alert("bạn Cần Đăng nhập");
    } else {
      const readerId = localStorage.getItem("readerId");
     
      const newdata = {
        idStory: id.slice(3),
        chapter: chapter.slice(8),
        readerId: readerId,
      }
      axios.post("http://localhost:8000/chap/buy",newdata).then((res)=> {
        //console.log(res.data)
        setData(res.data)
        window.location.reload(true);
      })
    }
  }
  
  //------------------------------------
  const [settingBackGround, setSettingBackGround] = useState({
    backgroundColor: "#fff",
  });
  const [settingReading, setSettingReading] = useState({
    fontSize: 26,
    lineHeight: 1.8,
    fontFamily: "Palatino Linotype",
  });
  // -----------------------------------

  const handleChangeBG = (color) => {
    setSettingBackGround((previousState) => {
      return { ...previousState, backgroundColor: color };
    });
  };
  const handleChangeFont = (font) => {
    setSettingReading((previousState) => {
      return { ...previousState, fontFamily: font };
    });
  };
  const handleChangeFontSize = (fontSize) => {
    setSettingReading((previousState) => {
      return { ...previousState, fontSize: fontSize };
    });
  };
  const handleChangeLineHeight = (number) => {
    setSettingReading((previousState) => {
      return { ...previousState, lineHeight: number };
    });
  };
  //-------------------------------------------------


  
  return (
    <div>
      <div className="read-wrapper">
        <Header />
        <Sidebar visibleS={false} />
        {data && show ? (
          <div className="read-container" style={settingBackGround}>
            <div className="read-main">
              <div className="_test">
                <img src={header} alt="" />
              </div>
              <div className="read-chapName">
                <span>Chương {data[0] && data[0].chapNumber ? data[0].chapNumber : ""}: </span>
                {data[0] && data[0].chapName ? data[0].chapName : ""}
              </div>
              <div className="read-information">
                <div className="inf-li">
                  <FontAwesomeIcon icon={faBook} className="_icon" />
                  {data[0] && data[0].idStory.nameStory ? data[0].idStory.nameStory : ""}
                </div>
                <div className="inf-li">
                  <FontAwesomeIcon icon={faFilePen} className="_icon" />
                  {data[0] && data[0].idStory.nameAuthor ? data[0].idStory.nameAuthor : ""}
                </div>

                <div className="inf-li">
                  <FontAwesomeIcon icon={faHeading} className="_icon" />
                  1999 Từ
                </div>
              </div>
              <div className="_start">
                <img src={start} alt="" />
              </div>

              <div className="read-text" style={settingReading}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data[0] && data[0].chapContain ? data[0].chapContain : "",
                  }}
                />
              </div>

              <div className="_end">
                <img src={start} alt="" />
              </div>
            </div>
          </div>
        ) : (
          <div className="unlock__chap"> 
            <span> --- Chương bị khóa --- </span>
            <p>Mở khóa chương để ủng hộ tác giả viết truyện</p>
            <div className="unlock__btn" onClick={handleOpenChap}>
              Mở khóa
              <span> 20 Coin </span>
            </div>
          </div>
        )}
        <Footer />
      </div>
      <div className="read-setting">
        <Setting
          handleChangeBG={handleChangeBG}
          settingBackGround={settingBackGround}
          handleChangeFont={handleChangeFont}
          handleChangeFontSize={handleChangeFontSize}
          settingReading={settingReading}
          handleChangeLineHeight={handleChangeLineHeight}          
          id={id}
          chapter= {chapter}
          chapContain = {data && data[0].chapContain ? data[0].chapContain : ""}
          chapTotal = {data && data[0].idStory ? data[0].idStory.chapCount : ""}
        />
      </div>
    </div>
  );
}
