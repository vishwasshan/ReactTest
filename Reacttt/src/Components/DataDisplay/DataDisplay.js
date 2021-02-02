import React from "react";
import "./DataDisplay.scss";
import GridLayot from "../GridLayot/GridLayot";

function DataDisplay({ loading, items }) {
  return loading ? (
    <h1>Loading....</h1>
  ) : (
      <div className="grid-container">
        {items.map((item) => (
          <GridLayot key={item.char_id}>
              <img src={item.img} alt=""/>
          </GridLayot>
        ))}
      </div>
  );
}

export default DataDisplay;
