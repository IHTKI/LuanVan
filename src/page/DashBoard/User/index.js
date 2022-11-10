import React, { useState } from "react";
import "./User.scss";
import admin from "~/assets/admin.png";
import {
  MdOutlineDashboard,
  MdFormatListBulleted,
  MdCollectionsBookmark,
  MdOutlineSettings,
  MdLogout,
} from "react-icons/md";
import { HiUsers, HiOutlineBell, HiBellAlert } from "react-icons/hi";
import { FaPlusSquare } from "react-icons/fa";

import Setting from "../Components/Setting";
import Users from "../Components/Users";
import Book from "../Components/Book";
import AddNewBook from "../Components/AddNewBook";

export default function User() {
  const [selected, setSelected] = useState(2);

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
              selected === 2
                ? "admin-controller-li is_selected"
                : "admin-controller-li"
            }
            onClick={() => setSelected(2)}
          >
            <HiUsers className="_icon" />
            <span>User</span>
          </div>
          <div
            className={
              selected === 1
                ? "admin-controller-li is_selected"
                : "admin-controller-li"
            }
            onClick={() => setSelected(1)}
          >

            <span>Setting</span>
          </div>
          <div className="admin-controller-btn">
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
          {selected === 1 ? <Setting user={"converter"} /> : ""}
          {selected === 2 ? "" : ""}
          {selected === 3 ? <Book /> : ""}
          {selected === 4 ? <AddNewBook /> : ""}
        </div>
      </div>
    </div>
  );
}
