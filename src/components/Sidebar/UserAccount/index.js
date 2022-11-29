import React, { useEffect, useState } from "react";
import "./UserAccount.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userImg from "~/assets/user-img.jpg";
import {
  faIdCard,
  faGear,
  faBook,
  faBell,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserAccount() {
  const navigation = useNavigate();
  const [data, setData] = useState("");
  const handleLogOut = () => {
    localStorage.removeItem("readerId");
    navigation("/");
  };

  useEffect(()=> {
    console.log(localStorage.getItem("readerId"));
    const URL = "http://localhost:8000/reader/" + localStorage.getItem("readerId");
    axios.get(URL).then((res)=> {
      //  console.log(res.data)
      setData(res.data)
    })
  },[])


  return (
    <div className="user-account-wrapper">
      <img src={data.avatar} alt="anh ne" className="user-account-img" />
      <h4 className="user-account-name">{data.nameUser}</h4>
      <div className="user-account-select">
        <Link to={"/profile"} className="user-account-item">
          <FontAwesomeIcon icon={faIdCard} className="user-icon" />
          Hồ Sơ
        </Link>
        <div className="user-account-item">
          <FontAwesomeIcon icon={faGear} className="user-icon" />
          Cài Đặt
        </div>
        <div className="user-account-item">
          <FontAwesomeIcon icon={faBook} className="user-icon" />
          Tủ Truyện
        </div>
        <div className="user-account-item" onClick={handleLogOut}>
          <FontAwesomeIcon icon={faRightFromBracket} className="user-icon" />
          Đăng Xuất
        </div>
      </div>
    </div>
  );
}
