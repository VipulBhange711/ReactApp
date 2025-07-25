function usergreeting(props){

return(
    props.islogin ? <p>this is login</p> : <p>this is not login</p>
);
}

export default usergreeting;