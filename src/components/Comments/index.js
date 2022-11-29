import React, { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import Comment from "./Comment";
import "./Comments.scss";
export default function Comments(props) {
  const { datas, hide } = props;
 
  const pagination = useRef();
  const [goTo, setGoTo] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
      if(datas !== "") {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(datas.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(datas.length / itemsPerPage));
      }
  }, [itemOffset, itemsPerPage,datas]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % datas.length;
    setGoTo(event.selected + 1);
    setItemOffset(newOffset);
  };

  const handleInputChange = (e) => {
    setGoTo(e.target.value);
  };

  const handleSubmit = () => {
    if (goTo <= pageCount && goTo !== 0 && goTo !== "") {
      const newOffset = ((goTo - 1) * itemsPerPage) % datas.length;
      pagination.current.state.selected = goTo - 1;
      setItemOffset(newOffset);
    }
  };

  //console.log(datas)

  return (
    <div className="cmts-wrapper">
      {datas.length !== 0 && currentItems !== ""
        ? currentItems.map((data) => {
            return <Comment data={data} hide={hide} />;
          })
        : ""}

      <div className="pagination-wrapper">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          ref={pagination}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="pagination-num"
          previousLinkClassName="pagination-num"
          nextLinkClassName="pagination-num"
          activeLinkClassName="pagination-active"
        />
        {datas.length !== 0 ? (
          <div className="pagination-find">
            <input
              type="text"
              className="_input"
              pattern="[1-9]"
              required
              value={goTo}
              onChange={handleInputChange}
            />
            <button className="_button" type="submit" onClick={handleSubmit}>
              Go
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
