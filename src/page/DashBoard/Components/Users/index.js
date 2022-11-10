import React, { useEffect, useRef, useState } from "react";
import "./Users.scss";
import { ImCross } from "react-icons/im";
import Items from "../Items";
import ReactPaginate from "react-paginate";
import AddUser from "../AddUser";

export default function Users(props) {
  const { datas } = props;
  const pagination = useRef();
  const [goTo, setGoTo] = useState(1);
  const [hide, setHide] = useState(false);
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

  const handleShowId = (id) => {
    console.log(id);
  };

  const handleSetHide = (value) => {
    setHide(value);
  }

  return (
    <div className="users__wrap">
      <div className="users__contain">
        <div className="users__title">All Users</div>
        <div className="users__search">
          <div className="search__text">
            <input
              type="text"
              className="search__input"
              placeholder="Search by name/email"
            />
            <ImCross className="_icon" />
          </div>
          <div className="search__option">
            <select className="minimal" defaultValue={"lime"}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>
          <div className="search__add" onClick={()=>setHide(true)}>+ Add User</div>
        </div>
        <div className="users__result">
          <div className="result__header">
            <div className="result-header-li _id">ID</div>
            <div className="result-header-li _name">Name</div>
            <div className="result-header-li _email">Email</div>
            <div className="result-header-li _role">role</div>
            <div className="result-header-li _actions">Actions</div>
          </div>

          <div className="result-ul">
            {datas.length !== 0
              ? currentItems.map((data) => {
                  return (
                    <Items
                      data={data}
                      handleShowId={handleShowId}

                    />
                  );
                })
              : ""}
          </div>

          <div className="result__pagination">
            <span>Result: {datas.length} </span>
            <div className="_test">
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
                  <button
                    className="_button"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Go
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="addUser__wrapper">{hide ? <AddUser handleSetHide={handleSetHide}/> : ""}</div>
    </div>
  );
}
