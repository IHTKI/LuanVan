import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faThumbsUp,
  faReply,
  faStar,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import "./Comment.scss";

import TextareaAutosize from "@mui/base/TextareaAutosize";
export default function Comment(props) {
  const { data, hide } = props;

  const [rep, setRep] = useState(false);
  const [seenRep, setSeenRep] = useState(false);
  const [textArea, setTextArea] = useState("");
  const [point, setPoint] = useState(0);

  const handleSubmit = () => {
    setTextArea("");
  };

  const handleRep = () => {
    setRep(true);
    setSeenRep(true);
  };

  const handleHideRep = () => {
    setRep(false);
  };

  useEffect(() => {
    const pointTotal = data.rateChar + data.rateWorld + data.rateContain;
    setPoint((pointTotal / 3).toFixed(1));
  }, []);

  return (
    <div className="cmt-wrapper">
      <div className="cmt-user">
        <img src={data.idReader.avatar} alt="" />
      </div>
      <div className="cmt-contain">
        <div className="cmt-nameUser">{data.idReader.nameUser}</div>
        <div className="cmt-rating">
          {!hide ? (
            <div className="cmt-rating-star">
              <div className="cmt-rating-ul">
                <FontAwesomeIcon
                  icon={faStar}
                  className={point > 1 ? "star-activity hw-15" : "hw-15"}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={point > 2 ? "star-activity hw-15" : "hw-15"}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={point > 3 ? "star-activity hw-15" : "hw-15"}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={point > 4 ? "star-activity hw-15" : "hw-15"}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={point >= 5 ? "star-activity hw-15" : "hw-15"}
                />
              </div>

              <span>{point}</span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="cmt-text">{data.contain}</div>
      </div>
    </div>
  );
}
