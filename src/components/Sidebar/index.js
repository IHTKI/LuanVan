import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import Wrapper from "../Wrapper";
import Menu from "./MenuCategory";
import UserAccount from "./UserAccount";

export default function Sidebar(props) {
  const [user, setUser] = useState("true");
  const { visibleS } = props;

  const [status, setStatus] = useState(true);
  const myFunction = () => {
    if (document.documentElement.scrollTop > 100) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };

  window.onscroll = () => {
    myFunction();
  };

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-container">
        <div className="sidebar-container-collumn">
          {visibleS ? (
            <div>
              <Tippy
                visible={status}
                interactive
                placement="bottom-start"
                render={(attrs) => (
                  <div className="category-result" tabIndex="-1" {...attrs}>
                    <Wrapper>
                      <Menu />
                    </Wrapper>
                  </div>
                )}
              >
                <button className="sidebar-container-category">
                  <FontAwesomeIcon icon={faBars} className="sidebar-icon" />
                  <span>Thể Loại</span>
                </button>
              </Tippy>
            </div>
          ) : (
            <div>
              <Tippy
                //visible={status}
                interactive
                placement="bottom-start"
                render={(attrs) => (
                  <div className="category-result" tabIndex="-1" {...attrs}>
                    <Wrapper>
                      <Menu />
                    </Wrapper>
                  </div>
                )}
              >
                <button className="sidebar-container-category">
                  <FontAwesomeIcon icon={faBars} className="sidebar-icon" />
                  <span>Thể Loại</span>
                </button>
              </Tippy>
            </div>
          )}

          <div className="sidebar-container-filter display-flex hover-eff">
            Lọc Truyện
          </div>
          <div className="sidebar-container-rank display-flex hover-eff">
            Bảng Xếp Hạng
          </div>
        </div>

        <div className="sidebar-container-collumn">
          <div className="sidebar-container-up display-flex hover-eff">
            Đăng Truyện
          </div>

          {user ? (
            <Tippy
              interactive
              placement="bottom-start"
              render={(attrs) => (
                <div className="user-result" tabIndex="-1" {...attrs}>
                  <Wrapper>
                    <UserAccount />
                  </Wrapper>
                </div>
              )}
            >
              <div className="sidebar-container-login display-flex hover-eff bg-spe">
                <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
                <span>Tài Khoản</span>
              </div>
            </Tippy>
          ) : (
            <div className="sidebar-container-login display-flex hover-eff">
              <FontAwesomeIcon
                icon={faRightToBracket}
                className="sidebar-icon"
              />
              <span>Đăng Nhập</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
