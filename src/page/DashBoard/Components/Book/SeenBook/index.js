import React from "react";
import "./SeenBook.scss";
export default function SeenBook(props) {
  const { setShow, data } = props;
  console.log(data)
  return (
    <div className="_wrap">
      <div className="__mask" onClick={() => setShow(false)}></div>
      <div className="__contain">

        <div className="__bookName">{data.nameStory}</div>
        <div className="__bookImg">
            <img src={data.img} alt=""/>
        </div>
        <div className="__bookAuthor">Tác giả: {data.nameAuthor}</div>
        <div className="__bookGenre">Thể Loại: {data.genre}</div>
        <div className="__bookDes">Thể Loại: {data.description}</div>


      </div>
    </div>
  );
}
