import React, { useState } from "react";

function CounterApp(){

const [countNumber, CounterNumber] = useState(0);

const add = () =>{
    CounterNumber(countNumber + 1);
}
const sub = () =>{
    CounterNumber(countNumber - 1);
}
const reset = () =>{
    CounterNumber( 0);
}
//update hello world
    return(
        <div className="counter-container">
                <p className="counter-display">{countNumber}</p >
                <button className="counter-button" onClick={add}> Add +</button>
                <button className="counter-button" onClick={reset}> Reset</button>
                <button className="counter-button" onClick={sub}> Sub -</button>
        </div>
    );
}

export default CounterApp;