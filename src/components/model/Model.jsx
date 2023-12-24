import React from "react";
import "./model.styles.css";

const Model = ({ stats }) => {
  console.log(stats);
  return (
    <div className="model-container">
      {stats.map((obj, index) => {
        const {base_stat, stat} = obj;
        const {name} = stat;
        return <div className="model-data">
          <span className="stat-name">{name}</span>
          <span className="stat">{base_stat}</span>
          <span
            className="colored-box"
            style={{ width: "200px", height: "10px" }}
          >
            <span className="fill" style={{ width: `${base_stat}%` }}></span>
          </span>
        </div>;
      })}
    </div>
  );
};

export default Model;
