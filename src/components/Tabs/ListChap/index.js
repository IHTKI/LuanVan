import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownShortWide,
  faArrowUpShortWide,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ListChap.scss";
export default function ListChap() {
  return (
    <div className="listChap-wrapper">
      <div className="listChap-header">
        <div className="listChap-title">
          Tổng Số Chương:
          <span>1223 Chương</span>
        </div>
        <div className="listChap-icon">
          <FontAwesomeIcon icon={faArrowDownShortWide} className="_icon" />
        </div>
      </div>
      <div className="listChap-ul">
        <div className="listChap-li">
          <div className="li-name">Chương 01: Tám Trăm Năm Sau</div>
        </div>
        <div className="listChap-li">
          <div className="li-name">Chương 02: Mở Ra Thần Võ Ấn Ký</div>
        </div>
        <div className="listChap-li">
          <div className="li-name">Chương 03: Hoàng Cực Cảnh</div>
        </div>
        <div className="listChap-li">
          <div className="li-name">Chương 04: Thời Không Bí Điển</div>
        </div>
      </div>
    </div>
  );
}
