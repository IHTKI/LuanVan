import React, { useState } from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";
import header from "~/assets/header.png";
import start from "~/assets/start.png";

import "./Read.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faFilePen,
  faHeading,
} from "@fortawesome/free-solid-svg-icons";
import Setting from "./Setting";
export default function Read() {
  const data1 =
    '"Trì Dao,ta đối với ngươi như tình cảm chân thành, ngươi vì sao muốn giết ta?"<br><br>Trương Nhược Trần hét lớn một tiếng, nghĩ trước bổ nhào về phía trước, ép tới mạ vàng chế tạo giường "Kẽo kẹt" một tiếng, đột nhiên ngồi dậy.<br><br>Phát hiện chỉ là một giấc mộng, Trương Nhược Trần mới thở ra một hơi thật dài, dùng ống tay áo đem mồ hôi trên trán lau khô.<br><br>Không!<br><br>Đây không phải là một giấc mộng!<br><br>Hắn cùng Trì Dao công chúa phát sinh hết thảy, lại thế nào có thể là một giấc mộng?<br><br>Trương Nhược Trần vốn là Côn Lôn Giới chín đại Đế Quân một trong "Minh Đế" con trai độc nhất, năm gần 16 tuổi, lợi dụng nghịch thiên thể chất, tu luyện tới Thiên Cực Cảnh đại viên mãn.<br><br>Nhưng là, ngay tại hắn trở thành Côn Lôn Giới thế hệ tuổi trẻ đệ nhất nhân thời điểm, lại chết tại mình thanh mai trúc mã vị hôn thê Trì Dao công chúa trong tay.<br><br>Trì Dao công chúa, là chín đại Đế Quân một trong "Thanh Đế" nữ nhi.<br><br>Minh Đế cùng Thanh Đế là tốt nhất bạn tri kỉ, Trương Nhược Trần cùng Trì Dao công chúa càng là chỉ phúc vi hôn, từ nhỏ cùng nhau lớn lên, cùng một chỗ tu luyện. Một cái tư thế hiên ngang, một cái mỹ mạo tuyệt luân, có thể xưng Kim Đồng Ngọc Nữ, lúc đầu có thể trở thành tu luyện giới một đoạn giai thoại.<br><br>Trương Nhược Trần làm sao cũng không ngờ được, Trì Dao công chúa thế mà lại ra tay với hắn!<br><br>Chết tại Trì Dao công chúa trong tay về sau, khi Trương Nhược Trần lần nữa tỉnh lại, lại phát hiện mình đã tại 800 năm về sau.<br><br>Đã từng Trì Dao công chúa, bình định Cửu Đế chi loạn, thống nhất cửu quốc, thành lập thứ nhất Trung Ương Đế Quốc, trở thành toàn bộ Côn Lôn Giới Chúa Tể —— Trì Dao Nữ Hoàng.<br><br>800 năm trước, xưng hùng Côn Lôn Giới Cửu Đế, triệt để trở thành quá khứ, biến mất tại lịch sử trường hà bên trong.<br><br>Cửu Đế đã chết, Nữ Hoàng đương lập.<br><br>Thời đại này, chỉ có một vị Hoàng giả, cái kia chính là Trì Dao Nữ Hoàng, thống ngự thiên hạ, uy lâm bát phương.<br><br>"Nàng vì sao muốn giết ta? Lòng của nàng tại sao có thể ác như vậy, hay là nói lòng của phụ nữ đều như thế hung ác?"<br><br>800 năm đi qua, sớm đã thương hải tang điền, cảnh còn người mất, ngoại trừ tu vi tuyệt thế Trì Dao Nữ Hoàng, thanh xuân vẫn như cũ, bất lão bất tử. Đã từng những cố nhân kia, toàn bộ đều đã hoá thành cát vàng, biến thành bạch cốt.';
  const data2 =
    '<br><br>Cho dù là năm đó uy phong bát diện Cửu Đế, cũng đều toàn bộ ở nhân gian tuyệt tích, chỉ để lại từng đoạn để hậu nhân kéo dài truyền tụng huy hoàng cố sự<br><br>"Kẹt kẹt!"<br><br>Một cái thân thể nhu nhược cung trang mỹ phụ nhân, từ bên ngoài đẩy cửa đi tới, nhìn xem ngồi tại trên giường Trương Nhược Trần, mang theo mắt ân cần thần, "Trần Nhi, ngươi lại thấy ác mộng?"<br><br>Trước mắt người mỹ phụ này, là Vân Võ Quận Vương Vương phi, cũng là Trương Nhược Trần mẫu thân, Lâm Phi.<br><br>Cái này một thân thể nguyên chủ nhân, bởi vì người yếu nhiều bệnh, ba ngày trước liền bệnh chết tại trên giường.<br><br>Trương Nhược Trần bị Trì Dao công chúa giết chết về sau, lần nữa tỉnh lại, liền xuất hiện tại cái này một thân thể bên trong, để nguyên bản bệnh chết thiếu niên khởi tử hồi sinh. Càng thêm trùng hợp chính là, cái này một thân thể nguyên chủ nhân, cũng gọi Trương Nhược Trần.<br><br>Trương Nhược Trần vừa mới lúc tỉnh lại, còn rất bài xích Lâm Phi. Dù sao ở trong mắt Trương Nhược Trần, Lâm Phi, chỉ là một người xa lạ.<br><br>Nhưng là, đi qua ba ngày tiếp xúc, Trương Nhược Trần dần dần phát hiện, Lâm Phi thật hết sức quan tâm hắn, đơn giản cẩn thận, nhìn thấy Trương Nhược Trần làm ác mộng bị làm tỉnh lại, càng không để ý trời đông giá rét, lập tức chạy đến Trương Nhược Trần gian phòng.<br><br>Ở kiếp trước, Trương Nhược Trần chưa bao giờ thấy qua mình mẹ đẻ. Nghe nói, tại mình ra đời thời điểm, nàng liền đi thế! Không nghĩ tới, bị Trì Dao công chúa giết chết về sau, trùng sinh tại cái này một thân thể bên trong, vậy mà để hắn nhiều một vị mẫu thân, cảm nhận được tình thương của mẹ ấm áp.<br><br>"Có lẽ nàng còn không biết, mình Trần Nhi, tại ba ngày trước, liền bệnh chết!<br><br>Nếu là nói cho nàng chân tướng, nàng chưa hẳn chịu được tin dữ này đả kích.<br><br>Trương Nhược Trần nhìn trước mắt người mỹ phụ này, nhãn thần trở nên nhu hòa, mỉm cười: "Mẫu thân, không cần lo lắng cho ta, chỉ là một giấc mộng mà thôi."Lâm Phi đơn bạc trên thân hất lên một kiện đỏ thẫm sắc ngay cả mũ lông chồn, ngồi tại Trương Nhược Trần bên giường, vuốt ve Trương Nhược Trần cái trán, lo lắng nói: "Đã ba ngày buổi tối, ngươi luôn luôn bị ác mộng làm tỉnh lại, mỗi lần đều gọi \'Trì Dao\' danh tự. Nàng đến cùng là ai a?"<br><br>Lâm Phi tự nhiên không có khả năng đem "Trì Dao" cái tên này, liên tưởng đến thứ nhất Trung Ương Đế Quốc Nữ Hoàng.';
  const data3 =
    '<br><br>Huống hồ, Trì Dao Nữ Hoàng thống nhất Côn Lôn Giới, thành lập thứ nhất Trung Ương Đế Quốc về sau, liền danh xưng "Đại Uy Đại Đức Nữ Thánh Hoàng", bình thường căn bản không có người dám nhắc tới "Trì Dao" hai chữ. Sẽ phạm kiêng kị.<br><br>Trương Nhược Trần nói: "Không có gì, mẫu thân, ngươi nghe lầm!"<br><br>Lâm Phi thở dài một cái, nói: "Sau này tuyệt đối không nên lại gọi thẳng \'Trì Dao\' hai chữ, cho dù là trong mộng cũng không được, đây chính là Nữ Hoàng tục danh. Gọi thẳng Nữ Hoàng tục danh là đại bất kính, một khi bị người hữu tâm nghe được, sẽ bị xử tử."<br><br>Trương Nhược Trần nhẹ gật đầu, thật chặt nhéo nhéo ngón tay, có phần ngậm thâm ý nói: "Tuyệt đối sẽ không! Sau này..."<br><br>Sau này, ta chính là nàng ác mộng.Sau này, ta chính là nàng ác mộng.<br><br>Lâm Phi nhìn xem dáng người gầy yếu, sắc mặt tái nhợt Trương Nhược Trần, nhẹ nhàng thở dài một hơi, trong lòng vô cùng chua xót.<br><br>Mặc dù sinh ở Quận Vương nhà, nhưng là, hắn lại từ nhỏ người yếu nhiều bệnh, đã 16 tuổi, vẫn như cũ chỉ có thể lâu dài nằm ở trên giường, chỉ sợ đời này cũng chỉ có thể bộ dáng này!<br><br>Bên ngoài, vang lên một trận xốc xếch tiếng bước chân.<br><br>"Các ngươi chơi cái gì? Nơi này chính là Ngọc Sấu Cung, ai cho các ngươi lá gan, dám tùy ý xông loạn tiến đến?" Một cái dung mạo xinh đẹp thị nữ, muốn ngăn lại xông vào Bát vương tử, lại bị Bát vương tử nhẹ nhàng đẩy, ném tới hơn mười mét bên ngoài.<br><br>Bát vương tử thế nhưng là một vị võ giả, tu vi đạt tới Hoàng Cực Cảnh hậu kỳ, một chưởng đánh ra, đủ để đem nặng ba trăm cân bàn đá đánh ra xa mười trượng, huống chi chỉ là một cái trên dưới một trăm cân nặng thị nữ?<br><br>Ngón tay búng một cái, liền có thể đưa nàng bắn bay ra ngoài.<br><br>Một cái kia thị nữ kêu thảm một tiếng, trùng điệp ngã xuống đất, tay trái cánh tay bị ngã đoạn.<br><br>Bát vương tử mặc một thân kim sợi áo, trên lưng quấn lấy một cây ngọc thạch mang, thân thể tráng kiện, cánh tay thon dài, bộ pháp trầm ổn, đi vào Ngọc Sấu Cung, lặng lẽ nhìn chằm chằm người thị nữ kia một chút, "Một cái nô tỳ cũng dám cản bản vương tử con đường, thật sự là muốn chết."<br><br>Bát vương tử sau lưng, đi theo sáu vị người mặc lân giáp da giáp thị vệ, thân thể cao lớn, lưng hùm vai gấu, hiển nhiên đều là chiến lực cường đại tu sĩ Võ Đạo, thuộc về hoàng cung cấm vệ.<br><br>Lâm Phi nghe phía bên ngoài động tĩnh, trấn an Trương Nhược Trần cảm xúc về sau, liền đóng cửa lại, đi ra ngoài.';

  const data = data1 + data2 + data3;

  //------------------------------------
  const [settingBackGround, setSettingBackGround] = useState({
    backgroundColor: "#fff",
  });
  const [settingReading,setSettingReading] = useState({
    fontSize: 26,
    lineHeight: 1.8,
    fontFamily: "Palatino Linotype",
  });
  // -----------------------------------

  const handleChangeBG = (color) => {
    setSettingBackGround((previousState) => {
      return { ...previousState, backgroundColor: color };
    });
  };
  const handleChangeFont = (font) => {
    setSettingReading((previousState) => {
      return { ...previousState, fontFamily: font };
    });
  }
  const handleChangeFontSize = (fontSize) => {
    setSettingReading((previousState) => {
      return { ...previousState, fontSize: fontSize };
    });
  }
  const handleChangeLineHeight = (number) => {
    setSettingReading((previousState) => {
      return { ...previousState, lineHeight: number };
    });
  }
  //-------------------------------------------------

  localStorage.setItem("name","ahihi");
  const getNe = localStorage.getItem('name')
  console.log(getNe)

  //-------------------------------------------------
  return (
    <div>
      <div className="read-wrapper">
        <Header />
        <Sidebar visibleS={false} />
        <div className="read-container" style={settingBackGround}>
          <div className="read-main">
            <div className="_test">
              <img src={header} alt="" />
            </div>
            <div className="read-chapName">
              <span>Chương 01: </span>
              Một Người Một Đao Một Con Chim
            </div>
            <div className="read-information">
              <div className="inf-li">
                <FontAwesomeIcon icon={faBook} className="_icon" />
                Vạn Cổ Thần Đế
              </div>
              <div className="inf-li">
                <FontAwesomeIcon icon={faFilePen} className="_icon" />
                Khiêm Siu Đẹp Zai
              </div>

              <div className="inf-li">
                <FontAwesomeIcon icon={faHeading} className="_icon" />
                1999 Từ
              </div>
            </div>
            <div className="_start">
              <img src={start} alt="" />
            </div>

            <div className="read-text" style={settingReading}>
              <div dangerouslySetInnerHTML={{ __html: data }} />
            </div>

            <div className="_end">
              <img src={start} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div className="read-setting">
        <Setting
          handleChangeBG={handleChangeBG}
          settingBackGround={settingBackGround}
          handleChangeFont={handleChangeFont}
          handleChangeFontSize = {handleChangeFontSize}
          settingReading={settingReading}
          handleChangeLineHeight={handleChangeLineHeight}
        />
      </div>
    </div>
  );
}
