import React from "react";
import "./Introduce.scss";
import chap from "~/assets/chap.png";
import book from "~/assets/bookcount.png";
import level from "~/assets/level.png";
import Slider from "react-slick";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Introduce() {
  const datas = [
    {
      storyImg:
        "https://static.cdnno.com/poster/van-co-than-de/150.jpg?1585205583",
      storyName: "Vạn Cổ Thần Đế",
      storyDescription:
        '..... 800 năm trước, Minh Đế chi tử Trương Nhược Trần, bị vị hôn thê  của hắn Trì Dao công chúa giết chết, thiên kiêu một đời, liền như vậy ngã xuống. Tám trăm năm sau, Trương Nhược Trần một lần nữa sống lại, lại phát hiện vị hôn thê đã từng giết chết hắn, đã thống nhất Côn Lôn Giới, mở ra Đệ Nhất Trung Ương đế quốc, được xưng "Trì Dao Nữ Hoàng" . Trì Dao Nữ Hoàng —— thống ngự thiên hạ, uy lâm bát phương; thanh xuân mãi mãi, bất tử bất diệt. Trương Nhược Trần đứng ở Chư Hoàng Từ Đường ở ngoài, nhìn Trì Dao Nữ Hoàng tượng thần, trong lòng bốc cháy lên hừng hực cừu hận liệt diễm, "Đợi ta trùng tu mười ba năm, dám gọi Nữ Hoàng dưới Hoàng Tuyền" . TG: Thần Ma Thiên Tôn, Linh Chu. TG đổi tên.',
      storyAuthor: "Phi Thiên Ngư",
      storyChap: "3210",
      storyGenre: "Huyền Huyễn",
      storyComp: "Đang Ra",
    },
    {
      storyImg:
        "https://static.cdnno.com/poster/quang-am-chi-ngoai/150.jpg?1655013821",
      storyName: "Quan Âm Chi Ngoại",
      storyDescription:
        'Thiên địa là vạn vật chúng sinh khách xá, quang âm là từ xưa tới nay khách qua đường. Tử sinh khác biệt, thật giống như mộng cùng tỉnh khác biệt, xôn xao biến hóa, không thể cật vấn. Như vậy siêu việt sinh tử, đã vượt ra thiên địa, tại quang âm bên ngoài , chờ đợi chúng ta là cái gì? Đây là Nhĩ Căn kế « Tiên Nghịch » « Cầu Ma » « Ngã Dục Phong Thiên » « Nhất Niệm Vĩnh Hằng » « Tam Thốn Nhân Gian » sau, sáng tác bộ tiểu thuyết thứ sáu  « Quang Âm Chi Ngoại » Converter: [Quang âm] có nghĩa là "Thời gian" hoặc là "Ánh sáng và bóng tối", hiện tại chưa rõ cốt truyện nên mình không biết theo nghĩa nào, nên tạm để hán việt. Nếu có lỗi về convert hoặc từ nào khó hiểu thì mọi người vui lòng báo mình nhé. Cầu đề cử hoa, cảm xúc, cảm ơn mọi người ạ.',
      storyAuthor: "Nhĩ Căn",
      storyChap: "416",
      storyGenre: "Tiên Hiệp",
      storyComp: "Đang Ra",
    },
    {
      storyImg:
        "https://static.cdnno.com/poster/xich-tam-tuan-thien/150.jpg?1612524612",
      storyName: "Xích Tâm Tuần Thiên",
      storyDescription:
        "Thời đại thượng cổ, Yêu tộc tuyệt tích. Thời đại cận cổ, Long tộc biến mất. Thần đạo đang thịnh thời đại đã như khói, phi kiếm đỉnh cao nhất thời đại cuối cùng trầm luân. . .Thế giớ Cái kia mai táng tại bên trong dòng sông thời gian chân tướng lịc Núi sông ngàn dặm viết thây nằm, càn khôn  Thiên đị Ta có xích tâm một viên, lấy tuần thiên! Cảnh giới tu luyện chia làm Du Mạch cảnh -> Chu Thiên cảnh -> Thông Thiên cảnh -> Đằng Long cảnh -> Nội Phủ cảnh -> Ngoại Lâu Cảnh -> Thần Lâm cảnh-> Động Chân cảnh--> Diễn Đạo cảnh.....",
      storyAuthor: "Tình Hà Dĩ Thâm",
      storyChap: "1809",
      storyGenre: "Tiên Hiệp",
      storyComp: "Đang Ra",
    },
    {
      storyImg:
        "https://static.cdnno.com/poster/bat-dau-nu-ma-dau-phu-ta/150.jpg?1646967756",
      storyName: "Cẩu Thả Tại Nữ Ma Đầu Bên Người Vụng Trộm Tu Luyện",
      storyDescription:
        'Tên cũ: Bắt Đầu Nữ Ma Đầu Phụ Ta Giang Hạo xuyên qua phổ thông nhân gia, bị ép bán nhập ma môn, trở thành Ma Môn đệ tử. Vốn định an tâm tu luyện một chút mạnh lên, tốt tại tu chân giới sinh tồn được, nhưng lại bị một vị nữ ma đầu "Đủ kiểu nhục nhã" . Thực lực chênh lệch cách xa, hắn chỉ có thể nhẫn nhục sống tạm bợ, hi vọng không cần gặp được đối phương. Không có có chỗ dựa hắn đạt được Ma Môn chưởng giáo ưu ái, có thể an tâm tu luyện, khi hắn thành vi thủ tịch đệ tử gặp mặt chưởng giáo lúc, lại sững sờ tại tại chỗ. Nhìn đối phương tuyệt mỹ khuôn mặt, hắn có chút cười không nổi, đây không phải lúc trước cái kia nữ ma đầu sao?',
      storyAuthor: "Phạ Lạt Đích Hồng Tiêu",
      storyChap: "437",
      storyGenre: "Tiên Hiệp",
      storyComp: "Đang Ra",
    },
  ];
  //---------------------------------------------
  const settings = {
    dots: true,
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="introduce-tab">
      <div className="contain-tab-left">
        <div className="left-contain">
          <p>
            .....
            <br />
            <br />
            <br />
            800 năm trước, Minh Đế chi tử Trương Nhược Trần, bị vị hôn thê của
            hắn Trì Dao công chúa giết chết, thiên kiêu một đời, liền như vậy
            ngã xuống. Tám trăm năm sau, Trương Nhược Trần một lần nữa sống lại,
            lại phát hiện vị hôn thê đã từng giết chết hắn, đã thống nhất Côn
            Lôn Giới, mở ra Đệ Nhất Trung Ương đế quốc, được xưng "Trì Dao Nữ
            Hoàng" . <br />
            <br />
            "&nbsp;" Trì Dao Nữ Hoàng —— thống ngự thiên hạ, uy lâm bát phương;
            thanh xuân mãi mãi, bất tử bất diệt. Trương Nhược Trần đứng ở Chư
            Hoàng Từ Đường ở ngoài, nhìn Trì Dao Nữ Hoàng tượng thần, trong lòng
            bốc cháy lên hừng hực cừu hận liệt diễm, "Đợi ta trùng tu mười ba
            năm, dám gọi Nữ Hoàng dưới Hoàng Tuyền" .{" "}
          </p>
          <br />
          <br />
          TG: Thần Ma Thiên Tôn, Linh Chu. TG đổi tên.
        </div>
        <div className="left-prize">
          Thành Tích :
          <img
            src="https://qdfepccdn.qidian.com/www.qidian.com/images/book/badges/yp_s1_gg_2022.png"
            alt=""
          />
          <img
            src="//qdfepccdn.qidian.com/www.qidian.com/images/book/badges/yp_s2_gg_2022.png"
            alt=""
          />
          <img
            src="https://qdfepccdn.qidian.com/www.qidian.com/images/book/badges/yp_s1_gg_2022.png"
            alt=""
          />
        </div>
        <div className="left-newChap">
          Chương Mới :
          <div className="list-newChap">
            <div className="list-newChap-li">
              Chương 3582: Phỏng Đoán
              <span>21/10/2022</span>
            </div>
            <div className="list-newChap-li">
              Chương 3582: Phỏng Đoán
              <span>21/10/2022</span>
            </div>
            <div className="list-newChap-li">
              Chương 3582: Phỏng Đoán
              <span>21/10/2022</span>
            </div>
            <div className="list-newChap-li">
              Chương 3582: Phỏng Đoán
              <span>21/10/2022</span>
            </div>
            <div className="list-newChap-li">
              Chương 3582: Phỏng Đoán
              <span>21/10/2022</span>
            </div>
          </div>
        </div>
        <div className="left-sameAuthor">
          Cùng Tác Giả:
          <div className="sameAuthor-list">
            <div className="sameAuthor-li">
              <div className="li-wrapper">
                <img
                  src="https://static.cdnno.com/poster/quang-am-chi-ngoai/150.jpg?1655013821"
                  alt=""
                />
                <div className="sameAuthor-contain">
                  <div className="sameAuthor-name">Quan Âm Chi Ngoại</div>
                  <span>
                    <FontAwesomeIcon icon={faBook} className="_icon"/>
                    Tiên Hiệp
                  </span>
                </div>
              </div>
            </div>
            <div className="sameAuthor-li">
              <div className="li-wrapper">
                <img
                  src="https://static.cdnno.com/poster/quang-am-chi-ngoai/150.jpg?1655013821"
                  alt=""
                />
                <div className="sameAuthor-contain">
                  <div className="sameAuthor-name">Quan Âm Chi Ngoại</div>
                  <span>
                    <FontAwesomeIcon icon={faBook} className="_icon"/>
                    Tiên Hiệp
                  </span>
                </div>
              </div>
            </div>
            <div className="sameAuthor-li">
              <div className="li-wrapper">
                <img
                  src="https://static.cdnno.com/poster/quang-am-chi-ngoai/150.jpg?1655013821"
                  alt=""
                />
                <div className="sameAuthor-contain">
                  <div className="sameAuthor-name">Quan Âm Chi Ngoại</div>
                  <span>
                    <FontAwesomeIcon icon={faBook} className="_icon"/>
                    Tiên Hiệp
                  </span>
                </div>
              </div>
            </div>
            <div className="sameAuthor-li">
              <div className="li-wrapper">
                <img
                  src="https://static.cdnno.com/poster/quang-am-chi-ngoai/150.jpg?1655013821"
                  alt=""
                />
                <div className="sameAuthor-contain">
                  <div className="sameAuthor-name">Quan Âm Chi Ngoại</div>
                  <span>
                    <FontAwesomeIcon icon={faBook} className="_icon"/>
                    Tiên Hiệp
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contain-tab-right">
        <div className="cvt-wrapper">
          <div className="cvt-header">
            <img
              className="cvt-img"
              src="https://facepic.qidian.com/qd_face/349573/a9639927/0"
              alt=""
            />
            <span className="cvt-rank">Bạch Kim</span>
          </div>
          <div className="cvt-name">Khiêm Siu Đẹp Trai</div>
          <div className="cvt-inf">
            <div className="cvt-inf-book">
              <img src={book} alt="" />
              <span className="inf-book-name">Số Truyện</span>
              <span className="inf-book-count">199</span>
            </div>
            <div className="cvt-inf-book">
              <img src={chap} alt="" />
              <span className="inf-book-name">Số Chương</span>
              <span className="inf-book-count">146.5k</span>
            </div>
            <div className="cvt-inf-book">
              <img src={level} alt="" />
              <span className="inf-book-name">Cấp</span>
              <span className="inf-book-count">4</span>
            </div>
          </div>
          <hr></hr>
          <div className="cvt-book-slide">
            <Slider {...settings}>
              {datas.map((data) => {
                return (
                  <div className="_book-slide">
                    <img src={data.storyImg} alt="" />
                    <div className="_book-slide-name">{data.storyName}</div>
                    <div className="_book-slide-des">
                      {data.storyDescription}
                    </div>
                    <div className="_book-slide-genre">{data.storyGenre}</div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
