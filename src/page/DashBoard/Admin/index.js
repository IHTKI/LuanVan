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

export default function Admin() {
  const [selected, setSelected] = useState(2);
  const datas = [
    {
      id: "A1B2",
      name: "Khiee Sieu Dejp Zai",
      email: "ahihihaisdjasjd",
      role: "converter",
    },
    {
      id: "4567",
      name: "Khiee Sieu Dejp Zai",
      email: "ahihihaisdjasjd",
      role: "converter",
    },
    {
      id: "4567",
      name: "Khiee Sieu Dejp Zai",
      email: "ahihihaisdjasjd",
      role: "converter",
    },
    {
      id: "4567",
      name: "Khiee Sieu Dejp Zai",
      email: "ahihihaisdjasjd",
      role: "converter",
    },
    {
      id: "4567",
      name: "Khiee Sieu Dejp Zai",
      email: "ahihihaisdjasjd",
      role: "converter",
    },
    {
      id: "4567",
      name: "Khiee Sieu Dejp Zai",
      email: "ahihihaisdjasjd",
      role: "converter",
    },
    {
      id: "4567",
      name: "Khiee Sieu Dejp Zai",
      email: "ahihihaisdjasjd",
      role: "converter",
    },
    {
      id: "4567",
      name: "Khiee Sieu Dejp Zai",
      email: "ahihihaisdjasjd",
      role: "converter",
    },
    {
      id: "4567",
      name: "Khiee Sieu Dejp Zai",
      email: "ahihihaisdjasjd",
      role: "converter",
    },
    {
      id: "4567",
      name: "Khiee Sieu Dejp Zai",
      email: "ahihihaisdjasjd",
      role: "converter",
    },
    {
      id: "4567",
      name: "Khiee Sieu Dejp Zai",
      email: "ahihihaisdjasjd",
      role: "converter",
    },
    {
      id: "4567",
      name: "Khiee Sieu Dejp Zai",
      email: "ahihihaisdjasjd",
      role: "converter",
    },
  ];
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
          <div className="admin-controller-li ">
            <MdCollectionsBookmark className="_icon" />
            <span>Book</span>
          </div>
          <div className="admin-controller-li ">
            <MdFormatListBulleted className="_icon" />
            <span>Category</span>
          </div>
          <div className={
              selected === 2
                ? "admin-controller-li is_selected"
                : "admin-controller-li"
            }
            onClick={()=>setSelected(2)}>
            <HiUsers className="_icon" />
            <span>User</span>
          </div>
          <div
            className={
              selected === 1
                ? "admin-controller-li is_selected"
                : "admin-controller-li"
            }
            onClick={()=>setSelected(1)}
          >
            <MdOutlineSettings className="_icon" />
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
          {selected === 1 ? <Setting /> : ""}
          {selected === 2 ? <Users datas={datas}/> : ""}
        </div>
      </div>
    </div>
  );
}
