import React, { useState } from "react";
import "./Admin.scss";
import admin from "~/assets/admin.png";
import {
  MdOutlineDashboard,
  MdFormatListBulleted,
  MdCollectionsBookmark,
  MdOutlineSettings,
  MdLogout,
} from "react-icons/md";
import { HiUsers, HiOutlineBell, HiBellAlert } from "react-icons/hi";
import Setting from "../Components/Setting";
import Users from "../Components/Users";
import { useNavigate } from "react-router-dom";
import AcceptStory from "../Components/AcceptStory";
import Book from "../Components/Book";
export default function Admin() {
  const [selected, setSelected] = useState(3);
  const navigation = useNavigate();

  
  console.log(localStorage.getItem("managerId"));
  const handleLogOut = () => {
    localStorage.removeItem("managerId");
    navigation("/login");
  };
  return (
    <div className="admin-wrap">
      <div className="admin-controller">
        <div className="admin-controller-ul">
          <div className="admin-controller-header">
            <img src={admin} alt="" />
            <span>Administrator</span>
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
            <span>Tác Phẩm Mới</span>
          </div>

          <div
            className={
              selected === 2
                ? "admin-controller-li is_selected"
                : "admin-controller-li"
            }
          >
            <HiUsers className="_icon" />
            <span>Người Dùng</span>
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
            <img src="https://i.ibb.co/WpM5yZZ/9.png" alt="" />
          </div>
          <div className="admin-contain-noti">
            <HiOutlineBell className="_icon" />
            <div className="_have"></div>
          </div>
        </div>
        <div className="admin-contain-content">
          {selected === 2 ? <Users /> : ""}
          {selected === 3 ? <Book control={"admin"}/> : ""}
        </div>
      </div>
    </div>
  );
}
