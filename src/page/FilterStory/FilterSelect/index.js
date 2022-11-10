import React, { useState } from "react";
import "./FilterSelect.scss";
export default function FilterSelect(props) {
  const { data, handleClick,title } = props;
  const [genre, setGenre] = useState();
  const handleLiClick = (e) => {
    if (e.target.value === genre) {
      handleClick('');
      setGenre();
    } else {
      handleClick(e.target.value);
      setGenre(e.target.value);
    }
  };
  return (
    <div className="filter-select-wrap">
      <div className="filter-select-title">{title}</div>
      <div className="filter-select-contain">
        <ul className="selection">
          {data.map((name, index) => {
            return (
              <li
                className={index === genre ? "item is_selected" : "item"}
                value={index}
                onClick={handleLiClick}
              >
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
