import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function AddContact() { 
    const [data, setdata]= useState({
        name: "",
        email: "",
        phone: Number
    });

    const [isChange, setIsChange]= useState(false);


    function dataChange(e){
        const {name, value}= e.target;
        setdata(prevData =>{
            return({...prevData, [name]: value});
        });
    }

    function submitData(e){
        e.preventDefault();
        axios.post('http://localhost:5000/add/', data).then(val => {
            setIsChange(true);
        }).catch(err => {
            console.log(err);
        });



        setdata({
            name: "",
            email: "",
            phone: Number
        });
    }






    return(
        <>
        <p>{isChange?<small>Contact added, please go to <Link to="/contactbook">Contact Book</Link></small>:null}</p>
        <form onSubmit={submitData} method="post">
            <div class="form-group">
                <label for="Name">Name</label>
                <input type="text" class="form-control"
                    placeholder="Enter name"name="name" value={data.name} onChange={dataChange} required/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" aria-describedby="emailHelp"
                    placeholder="Enter email"name="email" value={data.email} onChange={dataChange} required />
            </div>
            <div class="form-group">
                <label for="Phone">Phone</label>
                <input type="number" class="form-control"
                    placeholder="Enter Phone"name="phone" value={data.phone} onChange={dataChange} required/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </>
    )
}
export default AddContact;