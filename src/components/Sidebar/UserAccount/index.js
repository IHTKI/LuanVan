import React from "react";
import "./UserAccount.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userImg from "~/assets/user-img.jpg";
import {faIdCard,faGear,faBook,faBell,faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
 
export default function UserAccount() {
  return (
    <div className="user-account-wrapper">
        <img src={userImg} alt="anh ne" className="user-account-img"/>
        <h4 className="user-account-name">Khiêm Siêu Đẹp Zai</h4>
        <div className="user-account-select">
            <div className="user-account-item">
                <FontAwesomeIcon icon={faIdCard} className="user-icon"/>
                Hồ Sơ
            </div>
            <div className="user-account-item">
                <FontAwesomeIcon icon={faGear} className="user-icon"/>
                Cài Đặt
            </div>
            <div className="user-account-item">
                <FontAwesomeIcon icon={faBook} className="user-icon"/>
                Tủ Truyện
            </div>
            <div className="user-account-item">
                <FontAwesomeIcon icon={faBell} className="user-icon"/>
                Thông Báo
            </div>
            <div className="user-account-item">
                <FontAwesomeIcon icon={faRightFromBracket} className="user-icon"/>
                Đăng Xuất
            </div>
        </div>
    </div>
  )
}
