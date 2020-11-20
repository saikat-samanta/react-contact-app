//jshint esversion: 9
import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
import "./css/ContactBook.css";


function ContactBook() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000').then(res => {
            setItems(res.data);
        });
    }, [items.length]);

    function deleteItem(id) {
            setItems(() => {
                return items.filter(el => el._id !== id);
            });
    }







    return (
        <div className="contactbook">
            {items.map((el, index) =>
                <ItemCard key={index} name={el.name} email={el.email} phone={el.phone} id={el._id} deleteFn={deleteItem} />)}
        </div>
    )
}
export default ContactBook;