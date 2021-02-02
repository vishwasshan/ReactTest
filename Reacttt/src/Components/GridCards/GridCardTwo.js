import React from "react";
import "./GridCardTwo.scss";

function GridCardTwo({ info }) {
  console.log(info);
  return (
    <div className="gridCardTwo">
      <div className="gridCardTwo__inner1">
        <h1 className="heading-primary"> {info.heading}</h1>
        <p className="paragraph">{info.text}</p>
      </div>
      <div className="gridCardTwo__inner2">
        <img src={info.img} alt=""/>
      </div>
      <div className="gridCardTwo__img1"></div>
      <div className="gridCardTwo__img2"></div>
      <div className="gridCardTwo__img3"></div>
    </div>
  );
}

export default GridCardTwo;

// {info.heading}
// {info.text}
// {info.img}
