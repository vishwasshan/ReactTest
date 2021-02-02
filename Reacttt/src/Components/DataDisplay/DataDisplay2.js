import React from "react";
import "./DataDisplay.scss";
import GridLayot from "../GridLayot/GridLayot";

function DataDisplay2({ loading, items }) {
  return loading ? (
    <h1>Loading....</h1>
  ) : (
      <div className="grid-container">
        {items.map((item) => (
          <GridLayot key={item.episode_id} >
             <div key={item.episode_id} className="item">
                 <h3 className="h3">{item.series}</h3>
                 <p className="p1">Episodes : {item.episode}</p>
                 <p className="p2">Seasons : {item.season}</p>
                 <p className="p3">date : {item.air_date}</p>
                 <p className="p4">Title: {item.title}</p>

                 {item.characters.map((char)=>(
                   <p className="p5">{char}</p>
                 ))}


             </div>
          </GridLayot>
        ))}
      </div>
  );
}

export default DataDisplay2;
