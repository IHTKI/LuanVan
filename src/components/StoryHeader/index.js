import React from "react";
import "./Story.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen,faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import bookMark from "~/assets/medal1.png"

export default function StoryHeader(props) {

  const {data} = props;
  const {storyImg,storyName,storyDescription,storyAuthor,storyChap,storyGenre,storyComp} = data;
  console.log(storyImg)
  return (
    <div className="story-wrapper">

      <div className="story-img">
        <img
          src={storyImg}
          alt="anh ne"
        />
      </div>
      <div className="story-content">
        <div className="story-name">{storyName} </div>
        <div className="story-description">{storyDescription}
        </div>
        <div className="story-author">
          <FontAwesomeIcon icon={faUserPen} className="author-icon" />
          {storyAuthor}
        </div>
        <div className="story-chap">
          <FontAwesomeIcon icon={faBarsStaggered} className="chap-icon" />
          {storyChap} Chương
          </div>
        <div className="story-inf">
          <div className="story-inf-genre">{storyGenre}</div>
          <div className="story-inf-comp">{storyComp}</div>
        </div>
      </div>
      <img src={bookMark} alt="anh ne" className="story-mark"/>
    </div>
  );
}
