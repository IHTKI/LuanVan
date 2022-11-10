import React from "react";
import './RankOther.scss'
export default function RankOther(props) {
  const { img,name,number } = props;

  return (
    <div className="rank-top-remaining">
        <div className="_rank-top-other">
          <img src={img} alt="anh nè"/>
          <div className="_rank-top-name">{name}</div>
          <div className="_rank-top-number">{number}</div>
        </div>
      </div>
  );
}
