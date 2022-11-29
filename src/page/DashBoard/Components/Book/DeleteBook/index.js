import axios from "axios";
import React, { useState } from "react";
import "./DeleteBook.scss";
export default function DeleteBook(props) {
  const { setShow, data } = props;
  const [err, setErr] = useState("");
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  //console.log(data);

  const handleSubmit = () => {
    if (userName !== "" && pass !== "") {
      setErr("");
      //console.log("đúng");
      const deleteStory = {
        idStory: data._id,
        authorName: userName,
        passWord: pass,
      };

      axios
        .post("http://localhost:8000/story/delete", deleteStory)
        .then((res) => {
          if (res.data === "Success") {
            setUserName("");
            setPass("");
            setShow(0);
            window.location.reload();
          } else {
            setErr(res.data);
          }
        });
    } else {
      setErr("Vui lòng xác nhận tài khoản để xóa!");
    }
  };
  //console.log(data._id);
  //console.log(userName, pass);

  return (
    <div className="wrap">
      <div className="__contain">
        <div className="deleteBook__header">
          <div className="__title">Xác Nhận Xóa Tác Phẩm</div>
          <p className="__nameStory">{data.nameStory}</p>
          <p className="warning">
            Lưu ý: Khi bạn xóa tác phẩm, mọi thông tin cũng như dữ liệu tác phẩm
            sẽ mất. Hãy cân nhắc kĩ lưỡng!
          </p>
        </div>
        <div className="deleteBook__data">
          <div className="deleteBook__userName">
            <span>Tên Tài Khoản: </span>
            <input
              type="text"
              className="search__input"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="deleteBook__passWord">
            <span>Mật Khẩu: </span>
            <input
              type="password"
              className="search__input"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="err">{err}</div>
        </div>
        <div className="deleteBook__btn">
          <div className="__btnCancel" onClick={() => setShow(0)}>
            Hủy
          </div>
          <div className="__btnSubmit" onClick={handleSubmit}>
            Xác Nhận
          </div>
        </div>
      </div>
    </div>
  );
}
