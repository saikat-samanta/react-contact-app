// jshint esversion: 9
import React from "react";
import "./css/Card.css";






function Card(props) {
  return (
    <div className="_card">
      <div className="card_item">
          <h1>{props.title}</h1>
      </div>
    </div>
  );
}

export default Card;
