function food(){
       const obj1 = 'Orange';
        const obj2 = 'Mango';
        const obj3 = 'Apple';
        const obj4 = 'Banana';
    return(
     <div>

        <ul>
            <li>{obj1.toUpperCase()}</li>
            <li>{obj2}</li>
            <li>{obj3}</li>
            <li>{obj4}</li>
        </ul>
     </div>
    );
}
export default food