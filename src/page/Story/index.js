import React, { useEffect, useState } from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBookmark,
  faHeart,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import "./Story.scss";
import Tabs from "~/components/Tabs";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export default function Story() {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [rate, setRate] = useState("");
  const [history, setHistory] = useState("");
  const [show, setShow] = useState(false);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const URL = "http://localhost:8000/story/name/" + id.slice(3);
    axios.get(URL).then((res) => {
      //console.log(res.data);
      setData(res.data.story);
      setRate(res.data.rateStory);
      ratePoint(res.data.rateStory);
      setHistory(res.data.history);
      if (localStorage.getItem("readerId") === null) {
        setShow(false);
      } else {
        if (
          res.data.story[0].read.proposeReader.some((data) => {
            return data == localStorage.getItem("readerId");
          })
        ) {
          setShow(true);
        } else {
          setShow(false);
        }

        if (
          res.data.history.some((data) => {
            return (
              data.idReader == localStorage.getItem("readerId") &&
              data.checked === "Yes"
            );
          })
        ) {
          setCheck(true);
        } else {
          setCheck(false);
        }
      }
    });
  }, [id]);
  //console.log(history)
  const handleClick = () => {
    if (localStorage.getItem("readerId") !== null) {
      const idRead = {
        idStory: id.slice(3),
        idReader: localStorage.getItem("readerId"),
        chapReaded: 1,
      };
      axios.post("http://localhost:8000/read/add", idRead).then((res) => {
        //console.log(res.data);
      });
    }
  };
  const handleClickPropose = () => {
    if (localStorage.getItem("readerId") === null) {
      alert("Bạn cần đăng nhập để thực hiện chức năng này");
    } else {
      const idRead = {
        idStory: id.slice(3),
        idReader: localStorage.getItem("readerId"),
      };
      axios.post("http://localhost:8000/read/propose", idRead).then((res) => {
        console.log(res.data);
      });
      setShow(true);
    }
  };

  const handleCheckClick = () => {
    if (localStorage.getItem("readerId") === null) {
      alert("Bạn cần đăng nhập để thực hiện chức năng này");
    } else {
      const idRead = {
        idStory: id.slice(3),
        idReader: localStorage.getItem("readerId"),
      };
      axios.post("http://localhost:8000/history/add", idRead).then((res) => {
        //console.log(res.data);
      });
      //setShow(true);
    }
  };

  const ratePoint = (array) => {
    const pointChar = array.reduce(function (accumulator, data) {
      return accumulator + data.rateChar;
    }, 0);

    const pointWorld = array.reduce(function (accumulator, data) {
      return accumulator + data.rateWorld;
    }, 0);

    const pointContain = array.reduce(function (accumulator, data) {
      return accumulator + data.rateContain;
    }, 0);

    const pointTotal =
      Number(
        pointChar / array.length +
          pointContain / array.length +
          pointWorld / array.length
      ) / 3;
    setRate((pointTotal).toFixed(1));
  };

  return (
    <div className="_story-wrapper">
      <Header />
      <Sidebar />
      <div className="_story-container">
        <img
          src="https://static.cdnno.com/storage/topbox/8d3865b85f81854a4b1149212a925b82.jpg"
          alt=""
          className="_img-background"
        />
        <div className="_story-contain">
          <div className="_story-information">
            <div className="_story-information-1">
              <img src={data[0] && data[0].img ? data[0].img : ""} alt="" />
              <div className="_story-title">
                <div className="_story-name">
                  {data[0] && data[0].nameStory ? data[0].nameStory : ""}
                </div>
                <div className="_story-type">
                  <div className="_story-author">
                    {" "}
                    {data[0] && data[0].nameAuthor ? data[0].nameAuthor : ""}
                  </div>
                  <div className="_story-status">
                    {" "}
                    {data[0] && data[0].status ? data[0].status : ""}{" "}
                  </div>
                  <div className="_story-genre">
                    {" "}
                    {data[0] && data[0].genre ? data[0].genre : ""}
                  </div>
                </div>
                <div className="_story-detail">
                  <div className="_story-chap">
                    {data[0] && data[0].chapCount ? data[0].chapCount : ""}
                    <span>Chương</span>
                  </div>

                  <div className="_story-read">
                    {data[0] && data[0].read ? data[0].read.readTotal : ""}
                    <span>Lượt Đọc</span>
                  </div>
                  <div className="_story-keep">
                    {data[0] && data[0].read ? data[0].read.propose : ""}
                    <span>Đề Cử</span>
                  </div>
                  <div className="_story-speed">
                    {history.length}
                    <span>Đánh Dấu</span>
                  </div>
                </div>
                <div className="_story-rate">
                  <FontAwesomeIcon
                    icon={faStar}
                    className={
                      rate > 1
                        ? "_story-rate-icon star-active"
                        : "_story-rate-icon"
                    }
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={
                      rate > 2
                        ? "_story-rate-icon star-active"
                        : "_story-rate-icon"
                    }
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={
                      rate > 3
                        ? "_story-rate-icon star-active"
                        : "_story-rate-icon"
                    }
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={
                      rate > 4
                        ? "_story-rate-icon star-active"
                        : "_story-rate-icon"
                    }
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={
                      rate >= 5
                        ? "_story-rate-icon star-active"
                        : "_story-rate-icon"
                    }
                  />
                  <div className="_story-rate-point">
                    {" "}
                    <span>{rate}</span>/5 ({rate.length} Đánh Giá)
                  </div>
                </div>
                <div className="_story-btn">
                  <Link
                    to={`/story/id:${id.slice(3)}/chapter:1`}
                    className="_story-btn-read"
                    onClick={handleClick}
                  >
                    <FontAwesomeIcon icon={faBookOpen} />
                    Đọc Truyện
                  </Link>
                  <div
                    className={
                      check ? "_story-btn-tick check-active" : "_story-btn-tick"
                    }
                    onClick={handleCheckClick}
                  >
                    <FontAwesomeIcon icon={faBookmark} />
                    Đánh Dấu
                  </div>
                  <div
                    className={
                      show ? "_story-btn-heart show" : "_story-btn-heart"
                    }
                    onClick={handleClickPropose}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                    Đề Cử
                  </div>
                </div>
              </div>
            </div>
            <div className="_story-information-2">
              <Tabs idStory={id} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
