import React, { useEffect, useState } from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";
import { FaUserCog, FaUserLock } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { BsCoin } from "react-icons/bs";
import { MdFileUpload, MdDoubleArrow } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import "./Profile.scss";
import axios from "axios";
import PaypalCheckOutButton from "~/components/PaypalCheckOutButton";
import AlertText from "~/components/AlertText";
export default function Profile() {
  const [img, setImg] = useState("");
  const [valueCoin, setValueCoin] = useState(0);
  //console.log(img);
  const [show, setShow] = useState(2);
  const [data, setData] = useState();
  const [story, setStory] = useState();
  const handleChangeImg = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImg(file);
  };
  const navigation = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("readerId") === null) {
      navigation("/reader/login");
    }
    const URL = "http://localhost:8000/reader/information";
    const data = {
      idReader: localStorage.getItem("readerId"),
    };
    axios.post(URL, data).then((res) => {
      //console.log(res.data);
      setData(res.data.reader);
      setStory(res.data.story);
    });
  }, []);
  //console.log(data)
  //console.log(story)
  const product = {
    price: 5,
  }
  return (
    <div className="profile__wrap">
      <Header />
      <Sidebar />
      <div className="profile__img"></div>
      <div className="profile__contain">
        <div className="profile__left">
          <div className="profile__left__li">
            <ImProfile className="__icon__profile" />
            <span>Hồ Sơ</span>
          </div>
          <div
            className={
              show === 2 ? "profile__left__li activeLi" : "profile__left__li"
            }
            onClick={() => setShow(2)}
          >
            <FaUserCog className="__icon__profile" />
            <span>Cài Đặt</span>
          </div>
          <div
            className={
              show === 3 ? "profile__left__li activeLi" : "profile__left__li"
            }
            onClick={() => setShow(3)}
          >
            <FaUserLock className="__icon__profile" />
            <span>Đổi Mật Khẩu</span>
          </div>
          <div
            className={
              show === 4 ? "profile__left__li activeLi" : "profile__left__li"
            }
            onClick={() => setShow(4)}
          >
            <MdOutlineCollectionsBookmark className="__icon__profile" />
            <span>Tủ Truyện</span>
          </div>
          <div
            className={
              show === 5 ? "profile__left__li activeLi" : "profile__left__li"
            }
            onClick={() => setShow(5)}
          >
            <BsCoin className="__icon__profile" />
            <span>Nạp COIN</span>
          </div>
        </div>
        <div className="profile__right">
          <div className={show === 2 ? "profile__setting" : "hideTab"}>
            <div className="profile__setting__title">
              <span>Thông Tin Tài Khoản</span>
              <div className="err">Lỗi tài khoản</div>
            </div>
            <div className="profile__setting__img">
              <div className="img__now">
                <img src={data && data.avatar} alt="" />
              </div>
              <div className="img__icon">
                <MdDoubleArrow />
                <MdDoubleArrow />
                <MdDoubleArrow />
                <MdDoubleArrow />
                <MdDoubleArrow />
              </div>
              <div className="form-right">
                <label htmlFor="upload-file" className={img === null ? "" : ""}>
                  {img && <img src={img.preview} alt="" />}
                  {img ? "" : "Thay Avatar"}
                </label>
                <input
                  type="file"
                  id="upload-file"
                  onChange={handleChangeImg}
                  name="image"
                  accept="image/*"
                />
              </div>
            </div>
            <div className="profile__setting__name">
              <div className="_text">Tên Hiển Thị</div>
              <input type="text" className="_inputText" />
            </div>
            <div className="profile__setting__des">
              <div className="_text">Giới Thiệu Ngắn Về Bạn</div>
              <div className="box_textarea">
                <TextareaAutosize
                  className="_textArea1"
                  minRows={5}
                  maxRows={5}
                  placeholder="Tóm tắt cho truyện không nên quá dài mà nên ngắn gọn, tập trung, thú vị. Phần này rất quan trọng vì nó quyết định độc giả có đọc hay không. Tối đa 700 từ"
                  //value={description}
                  //onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="profile__setting__btn">
              <div className="_btn">Cập Nhật</div>
            </div>
          </div>
          <div className={show === 3 ? "profile__changePass" : "hideTab"}>
            <div className="profile__setting__title">
              <span>Đổi Mật Khẩu</span>
              <div className="err">Lỗi tài khoản</div>
            </div>
            <div className="profile__setting__pass">
              <div className="_text">Mật Khẩu Hiện Tại</div>
              <input type="passWord" className="_inputText" />
            </div>
            <div className="profile__setting__pass">
              <div className="_text">Mật Khẩu Mới</div>
              <input type="passWord" className="_inputText" />
            </div>
            <div className="profile__setting__pass">
              <div className="_text">Nhập Lại Mật Khẩu Mới</div>
              <input type="passWord" className="_inputText" />
            </div>
            <div className="profile__setting__btn">
              <div className="_btn">Cập Nhật</div>
            </div>
          </div>
          <div className={show === 4 ? "profile__store" : "hideTab"}>
            <div className="profile__setting__title">
              <span>Tủ Truyện</span>
              <div className="err">Xóa Thành Công</div>
            </div>
            {story &&
              story.map((data) => {
                return (
                  <div className="profile__setting__story">
                    <img src={data.idStory.img} alt="" />
                    <div className="in4">
                      <span>{data.idStory.nameStory}</span>
                      <div className="_text">
                        Đã đọc: {data.chapReaded}/{data.idStory.chapCount}{" "}
                        Chương
                      </div>
                    </div>
                    <div className="_delete">
                      <RiDeleteBin6Line className="_delete_icon" />
                    </div>
                  </div>
                );
              })}
          </div>
          <div className={show === 5 ? "profile__coin" : "hideTab"}>
            <div className="profile__setting__title">
              <span>Nạp Coin </span>
              <div className="err">Xóa Thành Công</div>
            </div>
            <div className="profile__setting__coin">
              <div className="profile__setting__number">
                <span>Hiện đang có: {data && data.coin}</span>
                <BsCoin className="__icon__coin" />
              </div>
              <div className="profile__setting__nap">
                <span>Bạn có thể nạp thêm COIN với tỉ lệ như sau: </span>
                <div className="price">
                  <span>Lựa chọn 1: 20.000VND</span>
                  <div className="price__coin">
                    <span>200 </span>
                    <BsCoin className="__icon__coin" />
                  </div>
                  <input
                    type="radio"
                    value="20000"
                    checked={valueCoin === 20000}
                    onChange={() => setValueCoin(20000)}
                  />
                </div>
                <div className="price">
                  <span>Lựa chọn 2: 50.000VND</span>
                  <div className="price__coin">
                    <span>500 + 50 </span>
                    <BsCoin className="__icon__coin" />
                  </div>
                  <input
                    type="radio"
                    value="50000"
                    checked={valueCoin === 50000}
                    onChange={() => setValueCoin(50000)}
                  />
                </div>
                <div className="price">
                  <span>Lựa chọn 3: 100.000VND</span>
                  <div className="price__coin">
                    <span>1000 + 100 </span>
                    <BsCoin className="__icon__coin" />
                  </div>
                  <input
                    type="radio"
                    value="100000"
                    checked={valueCoin === 100000}
                    onChange={() => setValueCoin(100000)}
                  />
                </div>
                <div className="price">
                  <span>Lựa chọn 4: 200.000VND</span>
                  <div className="price__coin">
                    <span>2000 + 250 </span>
                    <BsCoin className="__icon__coin" />
                  </div>
                  <input
                    type="radio"
                    value="200000"
                    checked={valueCoin === 200000}
                    onChange={() => setValueCoin(200000)}
                  />
                </div>
                <div className="price">
                  <span>Lựa chọn 5: 500.000VND</span>
                  <div className="price__coin">
                    <span>5000 + 500 </span>
                    <BsCoin className="__icon__coin" />
                  </div>
                  <input
                    type="radio"
                    value="500000"
                    checked={valueCoin === 500000}
                    onChange={() => setValueCoin(500000)}
                  />
                </div>
                <div className="paypal">
                    <PaypalCheckOutButton product={product}/>
                    <AlertText />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
