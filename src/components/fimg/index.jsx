import React from "react";
import "./style.css";
const Fimgs = (props) => {
  return (
    <div className="fimgs">
      <div className="fimg">
        <img src={props.src} alt="" />
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default Fimgs;
