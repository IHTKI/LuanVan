import React from "react";
import "./StoryFound.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";


export default function StoryFound(props) {

  const {data} = props;
  const {img,nameStory,description,nameAuthor,chapCount,genre,status} = data;
  const navigation = useNavigate();

  console.log(data._id)

  return (
    <div className="storyFound-wrapper">
      <Link to={`/story/id:${data._id}`} className="storyFound-img" >
        <img
          src={img}
          alt="anh ne"
        />
      </Link>
      <div className="storyFound-content">
        <div className="storyFound-name">{nameStory}</div>
        <div className="storyFound-description">{description}</div>
        <div className="storyFound-author">
          <FontAwesomeIcon icon={faUserPen} className="author-icon" />
          {nameAuthor}
        </div>
        <div className="storyFound-chap">
          <FontAwesomeIcon icon={faBarsStaggered} className="chap-icon" />
          {chapCount} Chương
        </div>
        <div className="storyFound-inf">
          <div className="storyFound-inf-genre">{genre}</div>
          <div className="storyFound-inf-comp">{status}</div>
        </div>
      </div>
      <img src="" alt="" className="storyFound-mark" />
    </div>
  );
}
