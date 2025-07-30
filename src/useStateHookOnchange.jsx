import React, { useState } from "react";


function MyComponent() {

    const [name, getName] = useState("Guest");
    const [Age, getAge] = useState(20);
    const [Comment, getComment] = useState("");
    const [payment, getPayment] = useState("Visa");
    const [shipping, getShipping] = useState();


    const getMyName = (event) => {
        getName(event.target.value);
    }

    const getMyAge = (event) => {
        getAge(event.target.value);
    }

    const getMyComment = (event) => {
        getComment(event.target.value);
    }

    const getMyPayment = (event) => {
        getPayment(event.target.value);
    }

    const getMyShipping = (event) => {
            getShipping(event.target.value);
    }

    return (
        <div>
            <input value={name} type="text" onChange={getMyName} placeholder="Enter Your Name" />
            <p>Your Name:<b>{name}</b></p>

            <input value={Age} type="number" onChange={getMyAge} placeholder="Enter Your Age" />
            <p>Your Age:<b>{Age}</b></p>

            <textarea value={Comment} name="" id="" onChange={getMyComment} placeholder="Enter Your Comment" />

            <p>Comment: <b>{Comment}</b></p>


            <select name="" onChange={getMyPayment} value={payment} id="">
                <option value="Select">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="GiftCard">GiftCard</option>
            </select>

            <p>Payment Type: {payment}</p>

            <label> 
                <input type="radio"  value="Pick Up"
                checked ={shipping === "Pick Up"}
                onChange={getMyShipping}
                />
                Pick Up
            </label> <br/>

            <label> 
                <input type="radio"  value="Delivery"
                checked ={shipping === "Delivery"}
                onChange={getMyShipping}
                />
                Delivery
            </label> <br/>

            <p>Shipping: {shipping}</p>

        </div>
    );
    //vipul
}
export default MyComponent;