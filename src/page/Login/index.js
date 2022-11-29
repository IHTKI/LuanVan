import React, { useState } from "react";
import "./Login.scss";
import { FaUserAlt, FaLock } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function Login() {
  const [page, setPage] = useState(1);

  const [err, setErr] = useState("");
  const [errRegister, setErrRegister] = useState("");

  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [checkBox, setCheckBox] = useState(false);

  const [nameRegister, setNameRegister] = useState("");
  const [passRegister, setPassRegister] = useState("");
  const [rePassRegister, setRePassRegister] = useState("");
  const [authorName, setAuthorName] = useState("");

  const navigation = useNavigate();

  const handleSubmit = (event) => {
    const user = {
      userName: userName,
      passWord: passWord,
    };

    axios.post("http://localhost:8000/manager/get", user).then((res) => {
      if (res.data.length > 0) {

        localStorage.setItem("managerId",res.data[0]._id);
        if(res.data[0].role === "Manager"){
          navigation("/user");
          
        } else {
          navigation("/admin");
        }
      } else {
        setErr("Tài khoản hoặc mật khẩu không đúng!");
      }
    });

    event.preventDefault();
  };
  // Xử lý phần đăng ký
  const handleRegisterSubmit = (event) => {
    if (passRegister !== rePassRegister) {
      setErrRegister("Mật khẩu bạn nhập không khớp!");
    } else {
      const userRegister = {
        idAuthor: (uuidv4()).slice(0,8),
        userName: nameRegister,
        passWord: passRegister,
        nameManager: authorName,
        role: "Manager",
      };

      axios
        .post("http://localhost:8000/manager/add", userRegister)
        .then((res) => {
          if (res.data.nameUser === "" && res.data.nameManager === "") {
            setNameRegister("");
            setPassRegister("");
            setRePassRegister("");
            setAuthorName("");
            setErrRegister("");
            setPage(1);
          } else {
            setErrRegister(res.data.nameUser + " " + res.data.nameManager);
          }
        });
    }

    event.preventDefault();
  };

  return (
    <div className="login__wrap">
      <div className="login__header">
        <div className="login__logo">
          <img alt="" src="https://sta.gtimg.com/qd6/images/logo.png" />
        </div>
      </div>
      <div className="login__contain">
        <div className="login__area">
          <div className="login__area__left">
            <img src="https://sta.gtimg.com/qd6/images/loginBg.jpg" alt="" />
          </div>
          <div className="login__area__right">
            <div className="right__header">
              <span
                className={page === 1 ? "page__select" : ""}
                onClick={() => setPage(1)}
              >
                Đăng Nhập
              </span>
              <span
                className={page === 2 ? "page__select" : ""}
                onClick={() => setPage(2)}
              >
                Đăng Ký
              </span>
            </div>

            {page === 1 ? (
              <form onSubmit={handleSubmit}>
                <div className="right__form__login">
                  <div className="form__user">
                    <div className="icon__wrap">
                      <FaUserAlt className="_icon" />
                    </div>
                    <input
                      type="text"
                      placeholder="Nhập tài khoản của bạn."
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="form__password">
                    <div className="icon__wrap">
                      <FaLock className="_icon" />
                    </div>
                    <input
                      type={checkBox ? "text" : "password"}
                      placeholder="Nhập mật khẩu của bạn."
                      required
                      value={passWord}
                      onChange={(e) => setPassWord(e.target.value)}
                    />
                  </div>
                  <div className="form__showPass">
                    <input
                      type="checkbox"
                      value={checkBox}
                      onChange={(e) => setCheckBox(e.target.checked)}
                    />
                    <span>Hiện mật khẩu</span>
                  </div>
                  {err !== "" ? <div className="form__err">{err}</div> : ""}
                  <input
                    type="submit"
                    value="Đăng Nhập"
                    className="form__submit"
                  />
                </div>
              </form>
            ) : (
              ""
            )}

            {page === 2 ? (
              <form onSubmit={handleRegisterSubmit}>
                <div className="right__form__register">
                  <div className="form__user">
                    <div className="icon__wrap">
                      <FaUserAlt className="_icon" />
                    </div>
                    <input
                      type="text"
                      placeholder="Nhập tài khoản của bạn."
                      required
                      value={nameRegister}
                      onChange={(e) => setNameRegister(e.target.value)}
                    />
                  </div>

                  <div className="form__password">
                    <div className="icon__wrap">
                      <FaLock className="_icon" />
                    </div>
                    <input
                      type="password"
                      placeholder="Nhập mật khẩu của bạn."
                      required
                      value={passRegister}
                      onChange={(e) => setPassRegister(e.target.value)}
                    />
                  </div>

                  <div className="form__re-password">
                    <div className="icon__wrap">
                      <FaLock className="_icon" />
                    </div>
                    <input
                      type="password"
                      placeholder="Nhập lại mật khẩu của bạn."
                      required
                      value={rePassRegister}
                      onChange={(e) => setRePassRegister(e.target.value)}
                    />
                  </div>

                  <div className="form__name">
                    <span>Bút danh mà bạn dùng</span>
                    <input
                      type="text"
                      required
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                    />
                  </div>
                  {errRegister !== "" ? (
                    <div className="form__err">{errRegister}</div>
                  ) : (
                    ""
                  )}
                  <input
                    type="submit"
                    value="Đăng Ký"
                    className="form__submit"
                  />
                </div>
              </form>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="login__footer">
        <img src="https://metruyencv.com/assets/images/footer-bg.png" alt="" />
      </div>
    </div>
  );
}
