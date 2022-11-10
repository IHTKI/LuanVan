import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";
import "./FilterStory.scss";
import Footer from "~/components/Footer";
import Pagination from "~/components/Pagination";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { storage } from "~/FireBase";
import FilterSelect from "./FilterSelect";
import StoryFound from "~/components/StoryFound";

export default function FilterStory() {
  const data = [
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
    {
      storyImg:
        "https://static.cdnno.com/poster/xich-tam-tuan-thien/150.jpg?1612524612",
      storyName: "Xích Tâm Tuần Thiên",
      storyDescription:
        "Thời đại thượng cổ, Yêu tộc tuyệt tích. Thời đại cận cổ, Long tộc biến mất. Thần đạo đang thịnh thời đại đã như khói, phi kiếm đỉnh cao nhất thời đại cuối cùng trầm luân. . .Thế giới này xảy ra chuyện gì? Cái kia mai táng tại bên trong dòng sông thời gian chân tướng lịch sử, ai đến lắng nghe? Núi sông ngàn dặm viết thây nằm, càn khôn trăm năm tô lại hổ đói. Thiên địa chí công như vô tình, Ta có xích tâm một viên, lấy tuần thiên!",
      storyAuthor: "Tinh Hà Dĩ Thâm",
      storyChap: "1811",
      storyGenre: "Tiên Hiệp",
      storyComp: "Đang Ra",
    },
    {
      storyImg:
        "https://static.cdnno.com/poster/ta-co-nhat-kiem/150.jpg?1653005683",
      storyName: "Ta Có Nhất Kiếm",
      storyDescription:
        "Thời đại thượng cổ, Yêu tộc tuyệt tích. Thời đại cận cổ, Long tộc biến mất. Thần đạo đang thịnh thời đại đã như khói, phi kiếm đỉnh cao nhất thời đại cuối cùng trầm luân. . .Thế giới này xảy ra chuyện gì? Cái kia mai táng tại bên trong dòng sông thời gian chân tướng lịch sử, ai đến lắng nghe? Núi sông ngàn dặm viết thây nằm, càn khôn trăm năm tô lại hổ đói. Thiên địa chí công như vô tình, Ta có xích tâm một viên, lấy tuần thiên!",
      storyAuthor: "Thanh Phong Loan",
      storyChap: "1811",
      storyGenre: "Huyền Huyễn",
      storyComp: "Đang Ra",
    },
    {
      storyImg:
        "https://static.cdnno.com/poster/nhan-vat-phan-dien-boss-tu-dong-phuong-bat-bai-bat-dau/150.jpg?1649314238",
      storyName: "Nhân Vật Phản Diện Boss: Từ Đông Phương Bất Bại Bắt Đầu",
      storyDescription:
        "Thời đại thượng cổ, Yêu tộc tuyệt tích. Thời đại cận cổ, Long tộc biến mất. Thần đạo đang thịnh thời đại đã như khói, phi kiếm đỉnh cao nhất thời đại cuối cùng trầm luân. . .Thế giới này xảy ra chuyện gì? Cái kia mai táng tại bên trong dòng sông thời gian chân tướng lịch sử, ai đến lắng nghe? Núi sông ngàn dặm viết thây nằm, càn khôn trăm năm tô lại hổ đói. Thiên địa chí công như vô tình, Ta có xích tâm một viên, lấy tuần thiên!",
      storyAuthor: "Tây Hồ Long Đằng",
      storyChap: "833",
      storyGenre: "Kiếm Hiệp",
      storyComp: "Đang Ra",
    },
    {
      storyImg:
        "https://static.cdnno.com/poster/tro-choi-nay-cung-qua-chan-that/150.jpg?1632640096",
      storyName: "Trò Chơi Này Cũng Quá Chân Thật",
      storyDescription:
        "Không đứng đắn giới thiệu vắn tắt: Trò chơi này cũng quá chân thật bá! Đánh như thế nào lấy đánh lấy đồng đội quần áo liền không có? Cái gì? Ngươi hỏi ta trò chơi này đứng đắn không? Đương nhiên nghiêm chỉnh! Dời gạch, chân chạy, nhặt đồ bỏ đi, đưa chuyển phát nhanh... Công ty nhiều nhất có thể để ngươi cảm nhận được 996 gian khổ, trong này ngươi có thể cảm nhận được siêu cấp gấp bội 007. Còn có so đây càng chân thực trò chơi? Tốt, không nhiều lời, vĩ đại người quản lý đại nhân gọi ta đi dời gạch. Vị đại nhân kia nói, chỉ cần chúng ta dâng lên mình lá gan, tháng sau hắn lại có thể đổi một bộ hoàn toàn mới động lực giáp, đến lúc đó mang bọn ta mở hoàn toàn mới bản đồ, đi rộng lớn đất chết nhặt càng nhiều rác rưởi!",
      storyAuthor: "Thần Tinh LL",
      storyChap: "1073",
      storyGenre: "Võng Du",
      storyComp: "Đang Ra",
    },
    {
      storyImg:
        "https://static.cdnno.com/poster/mink-duong-pho-so-13/150.jpg?1635124677",
      storyName: "Mink Đường Phố Số 13",
      storyDescription:
        "Thời đại thượng cổ, Yêu tộc tuyệt tích. Thời đại cận cổ, Long tộc biến mất. Thần đạo đang thịnh thời đại đã như khói, phi kiếm đỉnh cao nhất thời đại cuối cùng trầm luân. . .Thế giới này xảy ra chuyện gì? Cái kia mai táng tại bên trong dòng sông thời gian chân tướng lịch sử, ai đến lắng nghe? Núi sông ngàn dặm viết thây nằm, càn khôn trăm năm tô lại hổ đói. Thiên địa chí công như vô tình, Ta có xích tâm một viên, lấy tuần thiên!",
      storyAuthor: "Thuần Khiết Tích Tiểu Long",
      storyChap: "1182",
      storyGenre: "Đô Thị",
      storyComp: "Đang Ra",
    },
    {
      storyImg:
        "https://static.cdnno.com/poster/khung-bo-song-lai/150.jpg?1585205957",
      storyName: "Khủng Bố Sống Lại",
      storyDescription:
        "Ngũ trọc ác thế, Địa ngục đã không, ác quỷ sống lại, nhân gian như ngục. Thế giới này quỷ xuất hiện. . . Như vậy thần lại ở đâu? Cầu thần cứu thế, có thể trên đời đã mất thần, chỉ có quỷ.",
      storyAuthor: "Phật Tiền Hiến Hoa",
      storyChap: "1428",
      storyGenre: "Huyền Nghi",
      storyComp: "Đang Ra",
    },
    {
      storyImg:
        "https://static.cdnno.com/poster/mink-duong-pho-so-13/150.jpg?1635124677",
      storyName: "Mink Đường Phố Số 13",
      storyDescription:
        "Thời đại thượng cổ, Yêu tộc tuyệt tích. Thời đại cận cổ, Long tộc biến mất. Thần đạo đang thịnh thời đại đã như khói, phi kiếm đỉnh cao nhất thời đại cuối cùng trầm luân. . .Thế giới này xảy ra chuyện gì? Cái kia mai táng tại bên trong dòng sông thời gian chân tướng lịch sử, ai đến lắng nghe? Núi sông ngàn dặm viết thây nằm, càn khôn trăm năm tô lại hổ đói. Thiên địa chí công như vô tình, Ta có xích tâm một viên, lấy tuần thiên!",
      storyAuthor: "Thuần Khiết Tích Tiểu Long",
      storyChap: "1182",
      storyGenre: "Đô Thị",
      storyComp: "Đang Ra",
    },
  ];
  
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
                Có <span>{data.length}</span> tác phẩm
              </div>
            </div>
          </div>
          <Pagination datas={data} component={StoryFound}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
