import React from "react";
import "./AddUser.scss";
import { MdFileUpload } from 'react-icons/md';

export default function AddUser(props) {
  
  return (
    <div className="addUser_wrap">
      <div className="addUser__mask"></div>
      <div className="addUser__contain">
        <div className="addUser__header">
          <span>Add New User</span>
          <p>Add your user necessary information from here</p>
        </div>
        <div className="addUser__main">

          <div className="addUser__form">
            <div className="addUser__img">
              <span>User Image</span>

              <div className="form-right">
                <label htmlFor="upload-file">
                  <MdFileUpload className="_icon" />
                  <span>Upload File</span>
                </label>
                <input type="file" id="upload-file" />
              </div>

            </div>
            <div className="addUser__name">
              <span>Name</span>
              <input type='text' className="_textInput"/>
            </div>
          </div>

          <div className="addUser__button">
            <div className="addUser__btn _cancel">Cancel</div>
            <div className="addUser__btn _add">Add User</div>
          </div>
        </div>
      </div>
    </div>
  );
}
