import React from "react";
import "./StoryFound.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
export default function StoryFound(props) {

  const {data} = props;
  const {storyImg,storyName,storyDescription,storyAuthor,storyChap,storyGenre,storyComp} = data;

  return (
    <div className="storyFound-wrapper">
      <div className="storyFound-img">
        <img
          src={storyImg}
          alt="anh ne"
        />
      </div>
      <div className="storyFound-content">
        <div className="storyFound-name">{storyName}</div>
        <div className="storyFound-description">{storyDescription}</div>
        <div className="storyFound-author">
          <FontAwesomeIcon icon={faUserPen} className="author-icon" />
          {storyAuthor}
        </div>
        <div className="storyFound-chap">
          <FontAwesomeIcon icon={faBarsStaggered} className="chap-icon" />
          {storyChap} Chương
        </div>
        <div className="storyFound-inf">
          <div className="storyFound-inf-genre">{storyGenre}</div>
          <div className="storyFound-inf-comp">{storyComp}</div>
        </div>
      </div>
      <img src="" alt="" className="storyFound-mark" />
    </div>
  );
}
