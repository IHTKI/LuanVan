import React, { useEffect, useState } from "react";
import "./Setting.scss";
import { MdFileUpload } from "react-icons/md";
import { AiOutlineWarning } from "react-icons/ai";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import axios from "axios";

export default function Setting(props) {
  const { userData } = props;
  const [nameManager, setNameManager] = useState(userData.nameManager);
  const [passWord, setPassWord] = useState(userData.passWord);
  const [description, setDescription] = useState(userData.description);
  const [img, setImg] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("_id", userData._id);
    formData.append("image", img);
    formData.append("nameManager", nameManager);
    formData.append("passWord", passWord);
    formData.append("description", description);

    axios
      .post("http://localhost:8000/manager/update", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="setting-wrap">
      <div className="setting__contain">
        <div className="setting__title">Edit Profile</div>

        <form onSubmit={handleSubmit}>
          <div className="setting__block">
            <div className="setting__block__form">
              <div className="form__img">
                <span>Ảnh Đại Diện</span>
                <div className="form-right">
                  <label
                    htmlFor="upload-file"
                    className={img === null ? "" : "active"}
                  >
                    <MdFileUpload className="_icon" />
                    <span>{img === null ? "Upload file" : img.name}</span>
                  </label>
                  <input
                    type="file"
                    id="upload-file"
                    onChange={(e) => setImg(e.target.files[0])}
                    name="image"
                  />
                  <img src={userData.avatar} alt="" />
                </div>
              </div>
            </div>

            <div className="setting__warning">
              <AiOutlineWarning />
              <span>
                Hạn Chế Việc Đổi Tên Quá Nhiều Lần Dẫn Đến Đọc Giả Không Nhớ
                Được Tên Bạn!
              </span>
            </div>

            <div className="setting__block__name">
              <span>Bút Danh</span>
              <input
                type="text"
                name="name"
                value={nameManager}
                onChange={(e) => setNameManager(e.target.value)}
              />
            </div>
            <div className="setting__block__email">
              <span>Mật Khẩu</span>
              <input
                type="password"
                name="name"
                value={passWord}
                onChange={(e) => setPassWord(e.target.value)}
              />
            </div>
            <div className="setting_block__description">
              <span>Giới Thiệu</span>
              <div className="box_textarea">
                <TextareaAutosize
                  className="_textArea1"
                  placeholder="Để lại lời giới thiệu ngắn về bạn!"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <input
              type="submit"
              className="setting__block__btn"
              value="Update Profile"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
