import React, { useState } from "react";
import "./DataLi.scss";
import {
  ImCheckmark,
  ImCross,
  ImPencil,
  ImBin2,
  ImFileText2,
  ImClipboard,
  ImBook,
} from "react-icons/im";
import UpdateBook from "../UpdateBook";
import NewChap from "../NewChap";
import DeleteBook from "../DeleteBook";
import axios from "axios";
import SeenBook from "../SeenBook";
import SeenChap from "../SeenChap";

export default function DataLi(props) {
  const { data, control } = props;
  const [show, setShow] = useState(0);
  //console.log(data.read.)

  const handleAccept = () => {
    const newData = {
      id: data._id,
    };
    axios.post("http://localhost:8000/story/check", newData).then((res) => {
      console.log(res.data);
      window.location.reload(true);
    });
  };

  console.log(data)

  return (
    <div className="data__li__">
      <span className="span _idStory">{data.idStory}</span>
      <span className="span _name">{data.nameStory}</span>
      <span className="span _nameAuthor">{data.nameAuthor}</span>
      <span className="span _genre">{data.genre}</span>
      {control === "admin" ? (
        <>
          <span className="span _converter">{data.idManager.nameManager}</span>
          <span className="span _check">
            <ImCheckmark
              className="checkmark"
              onClick={(data) => handleAccept(data)}
            />
          </span>
          <span className="span _action">
            <ImBook className="action__icon" onClick={() => setShow(4)}/>
            <ImFileText2 className="action__icon" onClick={() => setShow(5)}/>
          </span>
        </>
      ) : (
        <>
          <span className="span _readCount">
            {data.read.readTotal !== undefined && data.read.readTotal}
          </span>

          <span className="span _status">{data.status}</span>
          <span className="span _accept">
            {data.accept === "false" ? (
              <ImCross className="cross" />
            ) : (
              <ImCheckmark className="checkmark" />
            )}
          </span>
          <span className="span _action">
            <ImPencil
              className="action__icon"
              onClick={() => {
                setShow(1);
              }}
            />
            <ImBin2 className="action__icon" onClick={() => setShow(3)} />
            <ImFileText2 className="action__icon" onClick={() => setShow(2)} />
          </span>
        </>
      )}

      {show === 1 ? <UpdateBook setShow={setShow} data={data} /> : ""}
      {show === 2 ? <NewChap setShow={setShow} data={data} /> : ""}
      {show === 3 ? <DeleteBook setShow={setShow} data={data} /> : ""}
      {show === 4 ? <SeenBook setShow={setShow} data={data} /> : ""}
      {show ===5 ? <SeenChap setShow={setShow} data={data} /> : ""}
    </div>
  );
}
