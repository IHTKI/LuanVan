import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";
import "./FilterStory.scss";
import Footer from "~/components/Footer";
import Pagination from "~/components/Pagination";
import FilterSelect from "./FilterSelect";
import StoryFound from "~/components/StoryFound";
import axios from "axios";

export default function FilterStory() {

  
  const [datas,setDatas] = useState("");

  useEffect(()=> {
    axios.get("http://localhost:8000/story/getall").then((res)=> {
      //console.log(res.data)
      setDatas(res.data)
    })
  },[])

  const genre = [
    "Đời Thường",
    "Đồng Nhân",
    "Huyền Huyễn",
    "Đô Thị",
    "Khoa Huyễn",
    "Kiếm Hiệp",
    "Kinh Dị",
    "Lịch Sử",
    "Thể Thao",
    "Quân Sự",
    "Tiên Hiệp",
    "Tiểu Thuyết",
    "Trò Chơi",
    "Võng Du",
  ];
  const status = ["Đang Ra", "Hoàn Thành"];
  const kind = ["Chuyển Ngữ", "Sáng Tác"];

  const [read, setRead] = useState();

  const handleRead = () => {
    setRead("Toàn");
  };

  const handleClick = (value) => {
    console.log(genre[value]);
  };

  return (
    <div className="filter-story-wrapper">
      <Header />
      <Sidebar visibleS={false} />
      <div className="filter-story-contain">
        <div className="filter-left">
          <div className="filter-left-title">
            a
          </div>
          <FilterSelect
            data={genre}
            handleClick={handleClick}
            title={"Thể Loại"}
          />
          <FilterSelect
            data={status}
            handleClick={handleClick}
            title={"Trình Trạng"}
          />
          <FilterSelect
            data={kind}
            handleClick={handleClick}
            title={"Loại Truyện"}
          />
        </div>
        <div className="filter-right">
          <div className="filter-right-title">
            <div className="_select">
              <div className="_select-item-spe">
                Lượt Đọc
                <FontAwesomeIcon icon={faCaretDown} className="_icon" />
                <div className="test">
                  <div className="test-item">Lượt Đọc [Tuần]</div>
                  <div className="test-item">Lượt Đọc [Tháng]</div>
                  <div
                    className={
                      read === "Toàn" ? "test-item selected" : "test-item"
                    }
                    onClick={handleRead}
                  >
                    {" "}
                    Lượt Đọc [Toàn]
                  </div>
                </div>
              </div>

              <div className="_select-item-spe">
                Đề Cử
                <FontAwesomeIcon icon={faCaretDown} className="_icon" />
                <div className="test">
                  <div className="test-item">Đề Cử [Tuần]</div>
                  <div className="test-item">Đề Cử [Tháng]</div>
                  <div
                    className={
                      read === "Toàn" ? "test-item selected" : "test-item"
                    }
                    onClick={handleRead}
                  >
                    {" "}
                    Đề Cử [Toàn]
                  </div>
                </div>
              </div>

              <div className="_select-item">
                Số Chương
                <FontAwesomeIcon icon={faCaretDown} className="_icon" />
              </div>

              <div className="_select-item">Điểm Đánh Giá</div>
              <div className="_select-item">Lượt Đánh Giá</div>
              <div className="_select-item">Bình Luận</div>

              <div className="total">
                {" "}
                Có <span>{datas.length}</span> tác phẩm
              </div>
            </div>
          </div>
          {datas !== "" ? (<Pagination datas={datas} component={StoryFound}/>) : ""}
          
        </div>
      </div>
      <Footer />
    </div>
  );
}
