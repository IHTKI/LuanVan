import React from "react";
import "./MenuCategory.scss";
import doithuong from "~/assets/icon-story/doithuong.png";
import dongnhan from "~/assets/icon-story/dongnhan.png";
import dothi from "~/assets/icon-story/dothi.png";
import huyenhuyen from "~/assets/icon-story/huyenhuyen.png";
import khoahuyen from "~/assets/icon-story/khoahuyen.png";

import kiemhiep from "~/assets/icon-story/kiemhiep.png";

import kinhdi from "~/assets/icon-story/kinhdi.png";

import lichsu from "~/assets/icon-story/lichsu.png";

import quansu from "~/assets/icon-story/quansu.png";

import thethao from "~/assets/icon-story/thetheo.png";

import tienhiep from "~/assets/icon-story/tienhiep.png";

import tieuthuyet from "~/assets/icon-story/tieuthuyet.png";

import trochoi from "~/assets/icon-story/trochoi.png";

import vongdu from "~/assets/icon-story/vongdu.png";

import MenuItem from "./MenuItems";

export default function Menu() {
  return (
    <div className="menu-wrapper">
      <MenuItem icon={doithuong} text={"Đời Thường"} count={10001} number={1}/>
      <MenuItem icon={dongnhan} text={"Đồng Nhân"} count={10002} number={1}/>
      <MenuItem icon={huyenhuyen} text={"Huyền Huyễn"} count={10003} number={2}/>
      <MenuItem icon={dothi} text={"Đô Thị"} count={10001} number={2}/>
      <MenuItem icon={khoahuyen} text={"Khoa Huyễn"} count={10004} number={1}/>
      <MenuItem icon={kiemhiep} text={"Kiếm Hiệp"} count={10005} number={1}/>
      <MenuItem icon={kinhdi} text={"Kinh Dị"} count={10006} number={2}/>
      <MenuItem icon={lichsu} text={"Lịch Sử"} count={10007} number={2}/>
      <MenuItem icon={quansu} text={"Quân Sự"} count={10008} number={1}/>
      <MenuItem icon={thethao} text={"Thể Thao"} count={10009} number={1}/>
      <MenuItem icon={tienhiep} text={"Tiêp Hiệp"} count={10010} number={2}/>
      <MenuItem icon={tieuthuyet} text={"Tiểu Thuyết"} count={10011} number={2}/>
      <MenuItem icon={trochoi} text={"Trò Chơi"} count={10012} number={1}/>
      <MenuItem icon={vongdu} text={"Võng Du"} count={10013} number={1}/>
    </div>
  );
}
