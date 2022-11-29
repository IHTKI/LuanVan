import React from "react";
import "./Header.scss";
import logo from "../../assets/logo/logo.png";
import Tippy from "@tippyjs/react/headless"; // different import path!
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMicrophone,
  faBookBookmark
} from "@fortawesome/free-solid-svg-icons";
import Wrapper from "../Wrapper";
import { useNavigate } from "react-router-dom";



export default function Header() {
  const navigation = useNavigate();

  const handleClick = ()=>{
    navigation("/");
  } 
  return (
    <header className="wrapper">
      <div className="inner">
        <div className="logo" onClick={handleClick}>
          <img src={logo} alt="some value" />
        </div>

        <Tippy
          visible={false}
          interactive
          render={(attrs) => (
            <div className="search-result" tabIndex="-1" {...attrs}>
              <Wrapper>
                <div className="search-result-item">Vạn Cổ Thần Đế</div>
                <div className="search-result-item">Vạn Tướng Chi Vương</div>
                <div className="search-result-item">Cửu Tinh Bá Thể Quyết</div>
              </Wrapper>
            </div>
          )}
        >
          <div className="search">
            <div className="search-btn">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>

            <input
              type="text"
              placeholder="Tìm kiếm truyện bạn muốn xem ..."
              spellCheck="false"
            />

            <div className="search-btn">
              <FontAwesomeIcon icon={faMicrophone} />
            </div>
          </div>
        </Tippy>

        <div className="action">
          <button>
            <FontAwesomeIcon icon={faBookBookmark} />
            <span>Tủ Truyện</span>
          </button>
        </div>
      </div>
    </header>
  );
}
