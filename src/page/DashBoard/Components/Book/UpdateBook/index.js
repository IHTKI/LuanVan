import React, { useState } from "react";
import "./UpdateBook.scss";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { MdFileUpload } from "react-icons/md";
import axios from "axios";
import { Form } from "react-router-dom";

export default function UpdateBook(props) {
  const { setShow,data } = props;
  
  const [nameStory,setNameStory]= useState(data.nameStory);
  const [des,setDes] = useState(data.description);
  const [genre,setGenre] = useState(data.genre);
  const [img,setImg] = useState('');

  const handleSubmit = () => {
    const newData = {
      ...data,
      nameStory: nameStory,
      description: des,
      genre: genre
    }

    const formData = new FormData();
    formData.append("image",img);
    formData.append("_id",data._id);
    formData.append("nameStory",nameStory);
    formData.append("description",des);
    formData.append("genre",genre);

    axios.post("http://localhost:8000/story/update", formData,{
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res)=> {
      console.log(res.data);
      window.location.reload(true);
    })
  }
  
  return (
    <div className="_wrap">
      <div className="__mask" onClick={() => setShow(0)}></div>
      <div className="__contain">
        <div className="__header">
          <span>Cập Nhật Tác Phẩm</span>
          <p>Cập nhật lại các thông tin cần thiết của tác phẩm.</p>
        </div>
        <div className="__main">
          <div className="__form">
            <div className="name__story">
              <span>Tên Truyện</span>
              <input type="text" className="search__input" value={nameStory} onChange={(e)=>setNameStory(e.target.value)}/>
            </div>

            <div className="description__story">
              <span>Giới Thiệu</span>
              <div className="box_textarea">
                <TextareaAutosize
                  className="_textArea1"
                  minRows={8}
                  maxRows={8}
                  placeholder="Tóm tắt cho truyện không nên quá dài mà nên ngắn gọn, tập trung, thú vị. Phần này rất quan trọng vì nó quyết định độc giả có đọc hay không. Tối đa 700 từ"
                  value={des}
                  onChange={(e) => setDes(e.target.value)}
                  //required
                  
                />
              </div>
            </div>

            <div className="img__story">
              <span>Ảnh Minh Học</span>
              <div className="form-right">
                <label htmlFor="upload-file">
                  <MdFileUpload className="_icon" />
                  <span>upload File</span>
                </label>
                <input
                  type="file"
                  id="upload-file"
                  onChange={(e) => setImg(e.target.files[0])}
                  name="image"
                />
                <img
                  src={data.img}
                  alt=""
                />
              </div>
            </div>

            <div className="genre__story">
              <div className="left">
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
              <div className="right">
                <div>Hoàn Thành Tác Phẩm</div>
              </div>
            </div>
          </div>

          <div className="__button">
            <div className="__btn _cancel" onClick={() => setShow(0)}>
              Hủy
            </div>
            <div className="__btn _add" onClick={handleSubmit}>Cập Nhật</div>
          </div>
        </div>
      </div>
    </div>
  );
}
