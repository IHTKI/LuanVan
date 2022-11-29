import "./AddNewBook.scss";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { MdFileUpload } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default function AddNewBook(props) {
  const { idAuthor } = props;
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const [nameStory, setNameStory] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("Huyền Huyễn");
  const [typeStory, setTypeStory] = useState("Truyện Dịch");
  const [nameAuthor, setNameAuthor] = useState("");
  const [img, setImg] = useState("");
  const [err, setErr] = useState("");
  const [errChap, setErrChap] = useState("");
  const [chapName, setChapName] = useState("");

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

  useEffect(() => {
    if (data === null) {
    } else {
      const formData = new FormData();
      formData.append("idStory", uuidv4().slice(0, 8));
      formData.append("nameStory", nameStory);
      formData.append("description", description);
      formData.append("genre", genre);
      formData.append("typeStory", typeStory);
      formData.append("nameAuthor", nameAuthor);
      formData.append("idManager", idAuthor);
      formData.append("chapCount", 1);
      formData.append("image", img);
      formData.append("chapNumber","1");
      formData.append("chapContain",value);
      formData.append("chapName",chapName);
      axios
        .post("http://localhost:8000/story/add", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          //console.log(res.data)
          if (res.data.idStory === "") {
            setErr(res.data.nameStory);
          } else {
            handleResetData();
            if(res.data.nameStory === "") setErr("Hoan Thanh")
          }
        });
    }
  }, [data]);

  const handleResetData = () => {
    setNameStory("");
    setImg("");
    setDescription("");
    setGenre("Huyền Huyễn");
    setTypeStory("Truyện Dịch");
    setNameAuthor("");
    setChapName("");
    setValue("");
    setErr("");
    setErrChap("");
    setData(null);
  };

  const handleSubmit = (event) => {
    if (img === "") {
      setErr("Bạn hãy để ảnh minh họa cho tác phẩm");
    } else {
      setErr("");
      setData(uuidv4().slice(0, 8));
    }
    event.preventDefault();
  };

  return (
    <div className="addNewBook__wrap">
      <form onSubmit={handleSubmit}>
        <div className="addNewBook__header">
          <span>Thêm Truyện Mới</span>
          <p>Bắt đầu sáng tạo thế giới riêng của bạn.</p>
        </div>
        <div className="addNewBook__contain">
          <div className="addNewBook__left">
            <div className="addNewBook__title">
              Thông tin cơ bản về truyện
              <span className="err">{err}</span>
            </div>
            <div className="addNewBook__name">
              <span>Tên Truyện</span>
              <input
                type="text"
                placeholder="Viết hoa chữ đầu mỗi từ: Giống Như Thế Này"
                required
                value={nameStory}
                onChange={(e) => setNameStory(e.target.value)}
              />
            </div>
            <div className="addNewBook__img">
              <span>Ảnh Minh Họa</span>
              <div className="form-right">
                <label htmlFor="upload-file" className="">
                  <MdFileUpload className="_icon" />
                  <span>{img === "" ? "Upload File" : img.name}</span>
                </label>
                <input
                  type="file"
                  id="upload-file"
                  name="image"
                  onChange={(e) => setImg(e.target.files[0])}
                />
              </div>
            </div>
            <div className="addNewBook__description">
              <span>Giới Thiệu</span>
              <div className="box_textarea">
                <TextareaAutosize
                  className="_textArea1"
                  minRows={10}
                  maxRows={10}
                  placeholder="Tóm tắt cho truyện không nên quá dài mà nên ngắn gọn, tập trung, thú vị. Phần này rất quan trọng vì nó quyết định độc giả có đọc hay không. Tối đa 700 từ"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="addNewBook__genre">
              <span>Thể Loại</span>
              <div className="search__option">
                <select
                  className="minimal"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                >
                  <option value="Huyền Huyễn">Huyền Huyễn</option>
                  <option value="Tiên Hiệp">Tiên Hiệp</option>
                  <option value="Huyền Nghi">Huyền Nghi</option>
                  <option value="Đô Thị">Đô Thị</option>
                </select>
              </div>
            </div>
            <div className="addNewBook__character">
              <span>Loại Truyện</span>
              <div className="search__option">
                <select
                  className="minimal"
                  value={typeStory}
                  onChange={(e) => setTypeStory(e.target.value)}
                >
                  <option value="Truyện Dịch">Truyện Dịch</option>
                  <option value="Truyện Sáng Tác">Truyện Sáng Tác</option>
                </select>
              </div>
            </div>
            <div className="addNewBook__author">
              <span>Tên Tác Giả</span>
              <input
                type="text"
                placeholder="Nhập tên tác giả."
                value={nameAuthor}
                onChange={(e) => setNameAuthor(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="addNewBook__right">
            <div className="addNewBook__title">
              Demo chương đầu của truyện
              <span className="err">{errChap}</span>
            </div>
            <div className="book__choose">
              <div className="book__add">
                <span>Tiêu Đề</span>
                <input
                  type="text"
                  placeholder="Số chương sẽ được đánh tự động."
                  value={chapName}
                  onChange={(e) => setChapName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="addNewBook__write">
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                modules={modules}
                formats={formats}
                required
              ></ReactQuill>
            </div>
          </div>
        </div>
        <div className="addNewBook__button">
          <input type="submit" className="_btn" value="Submit" />
        </div>
      </form>
    </div>
  );
}
