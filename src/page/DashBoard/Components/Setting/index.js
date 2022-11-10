import React from "react";
import "./Setting.scss";
import { MdFileUpload } from "react-icons/md";
import { AiOutlineWarning } from "react-icons/ai";
import TextareaAutosize from "@mui/base/TextareaAutosize";

export default function Setting(props) {
  const { user } = props;

  return (
    <div className="setting-wrap">
      <div className="setting__contain">
        <div className="setting__title">Edit Profile</div>
        <div className="setting__block">
          <div className="setting__block__form">
            <div className="form__img">
              <span>Profile Picture</span>
              <div className="form-right">
                <label for="upload-file">
                  <MdFileUpload className="_icon" />
                  <span>Upload File</span>
                </label>
                <input type="file" id="upload-file" />
                <img src="https://i.ibb.co/WpM5yZZ/9.png" alt="" />
              </div>
            </div>
          </div>
          {user === "converter" ? (
            <div className="setting__warning">
              <AiOutlineWarning />
              <span>
                Hạn Chế Việc Đổi Tên Quá Nhiều Lần Dẫn Đến Đọc Giả Không Nhớ
                Được Tên Bạn!
              </span>
            </div>
          ) : (
            ""
          )}
          <div className="setting__block__name">
            <span>Name</span>
            <input type="text" name="name" />
          </div>
          <div className="setting__block__email">
            <span>Password</span>
            <input type="password" name="name" />
          </div>
          <div className="setting_block__description">
            <span>Description</span>
            <div className="box_textarea">
              <TextareaAutosize
                className="_textArea1"
                placeholder="Để lại lời giới thiệu ngắn về bạn!"
              />
            </div>
          </div>
          <div className="setting__block__btn">
            <span>Update Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
}
