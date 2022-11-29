import React, { useEffect, useState } from "react";
import "./NewChap.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

export default function NewChap(props) {
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
  const { setShow, data } = props;
  const [value, setValue] = useState("");
  const [chapName, setChapName] = useState("");
  const [listChap, setListChap] = useState("");
  const [err, setErr] = useState("");
  const [check, setCheck] = useState(false);
  const [status, setStatus] = useState("open");

  useEffect(() => {
    if (data !== "") {
      const URL = "http://localhost:8000/chap/get/" + data._id;
      axios.get(URL).then((res) => {
        setListChap(res.data);
      });
    }
  }, []);

  const handleSubmit = () => {
    if (chapName !== "" && value !== "") {
      console.log(status)
      const newChap = {
        idStory: data._id,
        chapName: chapName,
        chapContain: value,
        status: status
      };
      axios.post("http://localhost:8000/chap/add", newChap).then((res) => {
        console.log(res.data);
        handleReset();
      });
    } else {
      //console.log("lỗi nè");
      setErr("Vui lòng kiểm tra tên chương hoặc nội dung chương!");
    }
  };

  const handleReset = () => {
    setShow(false);
    setErr("");
    setChapName("");
    setValue("");
  };

  const handleChange = () => {
    if (!check) {
      setStatus("close");
      setCheck(true);
    } else {
      setStatus("open");
      setCheck(false);
    }
  };

  return (
    <div className="_wrap">
      <div className="__mask" onClick={() => setShow(false)}></div>
      <div className="__contain">
        <div className="__header">
          <div className="__title">
            <span>Thêm Chương Mới</span>
            <p>Cập nhật chương mới cho tác phẩm.</p>
          </div>
          <div className="err">{err}</div>
        </div>
        <div className="__main">
          <div className="__form">
            <div className="newChap__number">
              <span>Các chương hiện tại</span>
              <div className="search__option">
                <select className="minimal">
                  {listChap !== "" &&
                    listChap.map((data) => {
                      return (
                        <option value={data.chapNumber} key={data._id}>
                          Chương {data.chapNumber} : {data.chapName}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>

            <div className="newChap__add">
              <span>Chương {listChap !== "" && listChap.length + 1}</span>
              <input
                type="text"
                className="search__input"
                value={chapName}
                onChange={(e) => setChapName(e.target.value)}
              />
              <div className="">
                <input
                  type="checkbox"
                  value="true"
                  ischecked={check}
                  onChange={handleChange}
                />{" "}
                Thu Phí
              </div>
            </div>

            <div className="newChap__contain">
              <span className="_span">Nội dung</span>
              <div className="addNewBook__write">
                <ReactQuill
                  //theme="snow"
                  value={value}
                  onChange={setValue}
                  modules={modules}
                  formats={formats}
                  //required
                ></ReactQuill>
              </div>
            </div>
          </div>

          <div className="__button">
            <div className="__btn _cancel" onClick={() => setShow(false)}>
              Hủy
            </div>
            <div className="__btn _add" onClick={handleSubmit}>
              Thêm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
