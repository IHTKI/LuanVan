import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownShortWide,
  faArrowUpShortWide,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import "./ListChap.scss";
import axios from "axios";
import { Link } from "react-router-dom";
export default function ListChap(props) {
  const { idStory } = props;
  const [data, setData] = useState("");

  useEffect(() => {
    const URL = "http://localhost:8000/chap/get/" + idStory.slice(3);
    axios.get(URL).then((res) => {
      setData(res.data);
    });
  }, [idStory]);

  //console.log(data);

  return (
    <div className="listChap-wrapper">
      <div className="listChap-header">
        <div className="listChap-title">
          Tổng Số Chương:
          <span>{data && data.length ? data.length : ""}</span>
        </div>
        <div className="listChap-icon">
          <FontAwesomeIcon icon={faArrowDownShortWide} className="_icon" />
        </div>
      </div>
      <div className="listChap-ul">
        {data !== "" &&
          data.map((item) => {
            return (
              <Link to={`/story/id:${item.idStory._id}/chapter:${item.chapNumber}`} className="listChap-li">
                <div className="li-name">Chương {item.chapNumber}: {item.chapName}</div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
