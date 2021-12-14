// jshint esversion: 9
import React from "react";
import Card from "./Card";
import "./css/MenuCard.css";
import { Link } from "react-router-dom";






function MenuCard() {
  return (
    <div className="menu_card">
        <Link to="/contactbook" className='text-link'>
      <Card title="Contact Book"/>
      </Link>
      <Link to="/add" className='text-link'>
      <Card title="Add Contact"/>
      </Link>
    </div>
  );
}

export default MenuCard;
