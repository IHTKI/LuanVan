import React from "react";
import "./Items.scss";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import AddUser from "../AddUser";
export default function Items(props) {
  const { data, handleShowId } = props;
  const handleClick = () => {
    handleShowId(data);
  };
  return (
    <div className="result-li">
      <div className="pd-12-16  _id">{data.id}</div>
      <div className="pd-12-16 _name">{data.name}</div>
      <div className="pd-12-16 _email">{data.email}</div>
      <div className="pd-12-16  _role">{data.role}</div>
      <div className="pd-12-16  _actions">
        <HiOutlinePencilAlt className="_icon _icon2" onClick={handleClick} />
        <AiOutlineDelete className="_icon _icon1" />
      </div>
    </div>
  );
}
