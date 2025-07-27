import React, {useState} from "react";
function mycomponent(){

    const [name,SetName] = useState("Guest");
    const [age,SetAge] = useState(24);
    const [isEMmployed, setIsEmployed] = useState(false);

    const UpdateName = () => {
        SetName("Vipul Bhange");
    }
const UpdateAge = () =>{
    SetAge(age+1); 
}

const toggleEmployedStatus = () => {
    setIsEmployed(!isEMmployed);
}


    return(
        <div>
            <p>Name:{name}</p>
            <button onClick={UpdateName}>
                click to get name
            </button>
            <p>Age:{age}</p>
            <button onClick={UpdateAge}>
                click to get age
            </button>
            <p>Emplyee Status:{isEMmployed ? "Yes":"No"}</p>
            <button onClick={toggleEmployedStatus}>
                click to get age
            </button>
        </div>
    );
}

export default mycomponent;
