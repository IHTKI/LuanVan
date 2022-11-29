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
import { useNavigate } from "react-router-dom";

export default function Sidebar(props) {
  const [readerId, setReaderId] = useState("");
  const { visibleS } = props;
  const navigation = useNavigate();

  const [status, setStatus] = useState(true);
  const myFunction = () => {
    if (document.documentElement.scrollTop > 100) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("readerId");
    //console.log(id)
    if (id !== null) {
      setReaderId(id);
    }else {
      setReaderId("");
    }
  }, []);


  window.onscroll = () => {
    myFunction();
  };

  const handleUpStory = () => {
    navigation("/login");
  };
  const handleFilter = () => {
    navigation("/story");
  };
  const handleReaderLogin = () => {
    navigation("/reader/login");
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

          <div
            className="sidebar-container-filter display-flex hover-eff"
            onClick={handleFilter}
          >
            Lọc Truyện
          </div>
          
        </div>

        <div className="sidebar-container-collumn">
          <div
            className="sidebar-container-up display-flex hover-eff"
            onClick={handleUpStory}
          >
            Đăng Truyện
          </div>

          {readerId !== "" ? (
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
            <div
              className="sidebar-container-login display-flex hover-eff"
              onClick={handleReaderLogin}
            >
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
