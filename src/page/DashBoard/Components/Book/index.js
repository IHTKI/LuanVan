import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Book.scss";
import DataLi from "./DataLi";
import ReactPaginate from "react-paginate";
import axios from "axios";
import UpdateBook from "./UpdateBook";

export default function Book(props) {
  const { control } = props;
  const [datas, setDatas] = useState("");
  const [searchName, setSearchName] = useState("");
  const [filterData, setFilterData] = useState("");
  const [filterGenre, setFilterGenre] = useState("Tất Cả");
  //const [open, setOpen] = useState(0);
  //setting react quill
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  // user với quyền người dùng

  useEffect(() => {
    const managerId = localStorage.getItem("managerId");
    //console.log(userId);
    if (control === "admin") {
      const URL = "http://localhost:8000/story/get";

      axios.get(URL).then((res) => {
        setDatas(res.data);
        //console.log(res.data)
        setFilterData(res.data);
      });
    } else {
      const URL = "http://localhost:8000/story/get/" + managerId;

      axios.get(URL).then((res) => {
        setDatas(res.data);
        //console.log(res.data)
        setFilterData(res.data);
      });
    }
  }, []);

  //console.log(datas);
  useEffect(() => {
    if (datas !== "") {
      const newData = datas.filter((data) => {
        const search = data.nameStory.toLowerCase();

        return search.includes(searchName);
      });
      setFilterData(newData);
    }
  }, [searchName, filterGenre]);

  // user với quyền admin

  //setting pagination
  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = filterData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filterData.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filterData.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="book__wrap">
      <div className="book__header">
        <span>
          {control === "admin" ? "Các Tác Phẩm Mới" : "Truyện Của Tôi"}
        </span>
        <p>
          {control === "admin"
            ? "Danh sách các tác phẩm mới đang chờ được duyệt"
            : "Danh sách tất cả các truyện của bạn."}
        </p>
      </div>
      <div className="book__contain">
        <div className="book__search">
          <div className="input__wrap">
            <input
              type="text"
              className="search__input"
              placeholder="Tìm theo tên"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>
          <div className="search__option">
            <select
              className="minimal"
              onChange={(e) => setFilterGenre(e.target.value)}
              value={filterGenre}
            >
              <option className="all">Tất Cả</option>
              <option value="Huyền Huyễn">Huyền Huyễn</option>
              <option value="Tiên Hiệp">Tiên Hiệp</option>
              <option value="Huyền Nghi">Huyền Nghi</option>
              <option value="Đô Thị">Đô Thị</option>
            </select>
          </div>
          <div className="search__option">
            <select className="minimal">
              <option value="all">Tất Cả</option>

              <option value="true">Đã Được Duyệt</option>
              <option value="false">Chưa Được Duyệt</option>
            </select>
          </div>
          <div className="search__option">
            <select className="minimal">
              <option value="Huyền Huyễn">Đang Ra</option>
              <option value="Tiên Hiệp">Hoàn Thành</option>
            </select>
          </div>
        </div>
        <div className="book__data">
          <div className="data__header">
            <span className="_idStory">ID Truyện</span>
            <span className="_name">Tên Truyện</span>
            <span className="_nameAuthor">Tên Tác Giả</span>
            <span className="_genre">Thể Loại</span>
            {control === "admin" ? (
              <>
                <span className="_converter">Người Phụ Trách</span>
                <span className="_check">Xét Duyệt</span>
              </>
            ) : (
            <>
              <span className="_readCount">Lượt Đọc</span>
              <span className="_status">Tình Trạng</span>
              <span className="_accept">Duyệt</span>
            </>
            )}
            <span className="_action">Tùy Chọn</span>
          </div>

          {currentItems !== ""
            ? currentItems.map((data) => {
                return <DataLi data={data} key={data._id} control={control}/>;
              })
            : ""}

          <div className="data__pagination">
            <div className="pagination__text">
              Tìm thấy:
              <span>{filterData.length}</span> kết quả
            </div>
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName="page-num"
              previousLinkClassName="page-num"
              nextLinkClassName="page-num"
              activeClassName="page-active"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
