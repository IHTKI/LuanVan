import React from "react";
import "./AddNewBook.scss";
import TextareaAutosize from "@mui/base/TextareaAutosize";

export default function AddNewBook() {
  return (
    <div className="addNewBook__wrap">
      <div className="addNewBook__header">
        <span>Thêm Truyện Mới</span>
        <p>Bắt đầu sáng tạo thế giới riêng của bạn.</p>
      </div>
      <div className="addNewBook__contain">
        <div className="addNewBook__left">
          <div className="addNewBook__title">Thông tin cơ bản về truyện</div>
          <div className="addNewBook__name">
            <span>Tên Truyện</span>
            <input
              type="text"
              placeholder="Viết hoa chữ đầu mỗi từ: Giống Như Thế Này"
            />
          </div>
          <div className="addNewBook__img">
            <span>Ảnh Minh Họa</span>
          </div>
          <div className="addNewBook__description">
            <span>Giới Thiệu</span>
            <div className="box_textarea">
              <TextareaAutosize
                className="_textArea1"
                minRows={10}
                maxRows={10}
                placeholder="Tóm tắt cho truyện không nên quá dài mà nên ngắn gọn, tập trung, thú vị. Phần này rất quan trọng vì nó quyết định độc giả có đọc hay không. Tối đa 700 từ"
              />
            </div>
          </div>
          <div className="addNewBook__genre">
            <span>Thể Loại</span>
            <div className="search__option">
              <select className="minimal" defaultValue={"lime"}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </div>
          </div>
          <div className="addNewBook__character">
            <span>Đặc Điểm Nhân Vật Chính</span>
            <div className="search__option">
              <select className="minimal" defaultValue={"lime"}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </div>
          </div>
        </div>
        <div className="addNewBook__right">
          <div className="addNewBook__title">Demo chương đầu của truyện</div>

        </div>
      </div>
    </div>
  );
}
