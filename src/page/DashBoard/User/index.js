import React, { useEffect, useState } from "react";
import "./User.scss";
import admin from "~/assets/admin.png";
import {
  MdOutlineDashboard,
  MdCollectionsBookmark,
  MdOutlineSettings,
  MdLogout,
} from "react-icons/md";
import { HiOutlineBell } from "react-icons/hi";
import { FaPlusSquare } from "react-icons/fa";
import Setting from "../Components/Setting";

import Book from "../Components/Book";
import AddNewBook from "../Components/AddNewBook";

import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function User() {

  const [selected, setSelected] = useState(3);
  const navigation = useNavigate();
  const [userData,setUserData] = useState({});

  useEffect(() => {
    const managerId = localStorage.getItem("managerId");
    if(managerId === null) {
      navigation("/login");
    }else {
      
      const URL = "http://localhost:8000/manager/get/" + managerId;
      axios.get(URL).then((res)=> {
        setUserData(res.data);
      })
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("managerId");
    navigation("/login");
  }

  //console.log(userData.img)

  return (
    <div className="admin-wrap">
      <div className="admin-controller">
        <div className="admin-controller-ul">
          <div className="admin-controller-header">
            <img src={admin} alt="" />
            <span>Creator</span>
          </div>
          <div className="admin-controller-li">
            <MdOutlineDashboard className="_icon" />
            <span>Dashboard</span>
          </div>
          <div
            className={
              selected === 3
                ? "admin-controller-li is_selected"
                : "admin-controller-li"
            }
            onClick={() => setSelected(3)}
          >
            <MdCollectionsBookmark className="_icon" />
            <span>Book</span>
          </div>
          <div
            className={
              selected === 4
                ? "admin-controller-li is_selected"
                : "admin-controller-li"
            }
            onClick={() => setSelected(4)}
          >
            <FaPlusSquare className="_icon" />
            <span>Add New Book</span>
          </div>
          <div
            className={
              selected === 1
                ? "admin-controller-li is_selected"
                : "admin-controller-li"
            }
            onClick={() => setSelected(1)}
          >
            <MdOutlineSettings className="_icon" />
            <span>Setting</span>
          </div>
          <div className="admin-controller-btn" onClick={handleLogOut}>
            <MdLogout className="_icon" />
            <span>Log Out</span>
          </div>
        </div>
      </div>
      <div className="admin-contain">
        <div className="admin-contain-header">
          <div className="admin-contain-account">
            <img
              src={userData.avatar}
              alt=""
            />
          </div>
          <div className="admin-contain-noti">
            <HiOutlineBell className="_icon" />
            <div className="_have"></div>
          </div>
        </div>
        <div className="admin-contain-content">
          {selected === 1 ? <Setting userData={userData}/> : ""}
          {selected === 2 ? "" : ""}
          {selected === 3 ? <Book control = {"manager"}/> : ""}
          {selected === 4 ? <AddNewBook idAuthor={userData._id}/> : ""}
        </div>
      </div>
    </div>
  );
}
