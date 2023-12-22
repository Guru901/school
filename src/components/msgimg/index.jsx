import React from "react";
import "./style.css";
const Msgimg = (props) => {
  return (
    <div className="msgimg">
      <img src={props.src} alt="" />
    </div>
  );
};

export default Msgimg;
