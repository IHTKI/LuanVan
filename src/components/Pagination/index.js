import React, { useEffect, useRef, useState } from "react";
import StoryFound from "../StoryFound";
import "./Pagination.scss";
import ReactPaginate from "react-paginate";

export default function Panagition(props) {
  const { datas, component } = props;
  console.log(datas)
  const Page = component;
  const pagination = useRef();
  const [goTo, setGoTo] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(datas.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(datas.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, datas]);

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

  return (
    <div>
      {datas.length !== 0 ? (
        currentItems.map((data) => {
          return (
            <div className="filter-right-item" key={data.index}>
              <Page data={data} />
            </div>
          );
        })
      ) : (
        <div className="error-search"> Không tìm thấy truyện phù hợp.</div>
      )}

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
