// jshint esversion: 9
import axios from "axios";
import React from "react";
import "./css/ItemCard.css";
import { Link } from "react-router-dom";



function ItemCard(props) {
    function deleteContact(id) {
        const reply = prompt("If you wanna delete contact say 'YES'!");
        if (reply === 'YES') {
            axios.post('http://localhost:5000/delete/', { id }).then(() => {
                props.deleteFn(id);
            }).catch(err => {
                console.log(err);
            });
        }
    }


    return (
        <div className="itemcard">
            <h2>{props.name}</h2>
            <a className="email" href={`mailto:${props.email}`}>📧 {props.email}</a>
            <a className="phone" href={`tel:+${props.phone}`}>📞 {props.phone}</a>
            <p><span onClick={() => {
                deleteContact(props.id)
            }}>delete</span> || <span><Link to={`/update/#${props.id}`}>Update</Link></span></p>
        </div>
    )
}
export default ItemCard;