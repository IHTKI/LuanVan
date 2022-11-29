import axios from "axios";
import React, { useEffect, useState } from "react";
import "./SeenChap.scss";
export default function SeenChap(props) {
  const { setShow, data } = props;
  const [newData, setNewData] = useState("");

  useEffect(() => {
    const URL = "http://localhost:8000/chap/get/" + data._id;

    axios.get(URL).then((res) => {
      setNewData(res.data);
    });
  }, []);

  console.log(newData[0]);

  return (
    <div className="_wrap">
      <div className="__mask" onClick={() => setShow(false)}></div>
      <div className="__contain">
        <div className="__chapName">{newData[0] !== undefined ? newData[0].chapName : ""}</div>
        {newData[0] !== undefined ? (
          <div dangerouslySetInnerHTML={{ __html: newData[0].chapContain }} className="__chapContain"/>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
