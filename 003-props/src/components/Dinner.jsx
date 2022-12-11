import React from "react";
import "./Dinner.css";
const Dinner = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={props.img} alt="" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
};

export default Dinner;
