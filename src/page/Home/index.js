import React from "react";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";
import "~/page/Home/Home.scss";
import SliderImg from "~/components/SliderImg";
import chapter from "~/assets/chapter.png";
import ranking from "~/assets/ranking.png";
import book from "~/assets/book.png";
import RankList from "~/components/RankList";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import SlideContent from "~/components/SlideContent";
import HotClassify from "~/components/HotClassify";
import one from "~/assets/classify-icon/seven.png";
import two from "~/assets/classify-icon/two.png";
import three from "~/assets/classify-icon/three.png";
import four from "~/assets/classify-icon/four.png";
import five from "~/assets/classify-icon/five.png";
import six from "~/assets/classify-icon/six.png";
import question from "~/assets/question.png";

import StoryHeader from "~/components/StoryHeader";
import StoryFound from "~/components/StoryFound";
import Footer from "~/components/Footer";

export default function Home() {
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
  ];

  return (
    <div className="home">
      <Header />
      <Sidebar visibleS={true} />
      <div className="home-wrapper">
        <div className="home-img"></div>
        <div className="home-first">
          <SliderImg />
        </div>
      </div>
      <div className="home-two">
        <div className="home-second">
          <div className="home-nominate">
            <div className="home-nominate-text">
              <img src={chapter} alt="anh ne" className="home-nominate-img" />
              Đề Cử Dành Cho Người Mới Bắt Đầu
              <div className="text-describe">
                Những truyện có nội dung dễ hiểu, nhẹ nhàng phụ hợp với giai
                đoạn đầu đọc truyện.
              </div>
            </div>
            <div className="cross"></div>

            <div className="home-nominate-story">
              <StoryHeader data={data[0]} />
              <StoryHeader data={data[1]} />
              <StoryHeader data={data[2]} />
              <StoryHeader data={data[3]} />
              <StoryHeader data={data[3]} />
              <StoryHeader data={data[3]} />
            </div>
          </div>
        </div>
        <div className="home-three">
          <div className="home-rank">
            <div className="home-rank-contain">
              <div className="rank-text">
                <img src={ranking} alt="anh ne" className="rank-text-img" />
                Bảng Xếp Hạng
                <div className="rank-text-describe">
                  Bảng xếp hạng các truyện nổi bật trong tuần.
                </div>
              </div>

              <div className="cross"></div>
              <div className="home-rank-table">
                <RankList title={"Đọc Nhiều Trong Tuần"} icon={faEye} />
                <RankList title={"Đề Cử Tuần"} icon={faHeart} />
                <RankList title={"Đọc Nhiều Trong Tuần"} icon={faEye} />
              </div>
            </div>
          </div>
        </div>

        <div className="home-four">
          <div className="home-outstanding">
            <div className="outstanding-text">
              <img src={book} alt="anh ne" className="outstanding-text-img" />
              Truyện Nổi Bật Và Truyện Mới
              <div className="outstanding-text-describe">
                Bảng xếp hạng các truyện nổi bật trong tuần.
              </div>
            </div>
            <div className="cross"></div>

            <div className="home-outstanding-part1">
              <SlideContent />
              <div className="outstanding-content">
                <HotClassify mgright={false} img={one} css={1} />
                <HotClassify mgright={false} img={two} css={2} />
                <HotClassify mgright={true} img={three} css={3} />
                <HotClassify mgright={false} img={four} css={4} />
                <HotClassify mgright={false} img={five} css={5} />
                <HotClassify mgright={true} img={six} css={6} />
              </div>
            </div>
            <div className="home-outstanding-part2">
              <SlideContent />
              <div className="outstanding-content2">
                <div className="item">
                  <StoryFound data={data[1]} />
                </div>
                <div className="item">
                  <StoryFound data={data[0]} />
                </div>
                <div className="item">
                  <StoryFound data={data[2]} />
                </div>
                <div className="item">
                  <StoryFound data={data[3]} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-five">
          <div className="home-suggest">
            <div className="home-suggest-header">
              Gợi Ý Cho Bạn
              <img src={question} alt="" className="suggest-icon" />
              <span>
                Đề cử thông minh dựa trên thói quen đọc truyện của bạn.
              </span>
              <button>Làm Mới</button>
            </div>
            <div className="home-suggest-contain">
              <div className="suggest-item even">
                <div className="suggest-item-img">
                  <img src="https://static.cdnno.com/poster/quang-am-chi-ngoai/150.jpg?1655013821" alt=""/>
                </div>
                <div className="suggest-item-name">
                  Phương Thiên Chi Ngoại 
                </div>
                <div className="suggest-item-author">
                  Nhĩ Căn
                </div>
                <button> Đọc Thử</button>
              </div>
              <div className="suggest-item odd">
                <div className="suggest-item-img">
                  <img src="https://static.cdnno.com/poster/quang-am-chi-ngoai/150.jpg?1655013821" alt=""/>
                </div>
                <div className="suggest-item-name">
                  Phương Thiên Chi Ngoại 
                </div>
                <div className="suggest-item-author">
                  Nhĩ Căn
                </div>
                <button> Đọc Thử</button>
              </div><div className="suggest-item even">
                <div className="suggest-item-img">
                  <img src="https://static.cdnno.com/poster/quang-am-chi-ngoai/150.jpg?1655013821" alt=""/>
                </div>
                <div className="suggest-item-name">
                  Phương Thiên Chi Ngoại 
                </div>
                <div className="suggest-item-author">
                  Nhĩ Căn
                </div>
                <button> Đọc Thử</button>
              </div><div className="suggest-item odd">
                <div className="suggest-item-img">
                  <img src="https://static.cdnno.com/poster/quang-am-chi-ngoai/150.jpg?1655013821" alt=""/>
                </div>
                <div className="suggest-item-name">
                  Phương Thiên Chi Ngoại 
                </div>
                <div className="suggest-item-author">
                  Nhĩ Căn
                </div>
                <button> Đọc Thử</button>
              </div><div className="suggest-item even">
                <div className="suggest-item-img">
                  <img src="https://static.cdnno.com/poster/quang-am-chi-ngoai/150.jpg?1655013821" alt=""/>
                </div>
                <div className="suggest-item-name">
                  Phương Thiên Chi Ngoại 
                </div>
                <div className="suggest-item-author">
                  Nhĩ Căn
                </div>
                <button> Đọc Thử</button>
              </div>
            </div>
          </div>
        </div>
        <div className="chatbot">chatbot nè</div>
      </div>
      <Footer />
    </div>
  );
}
