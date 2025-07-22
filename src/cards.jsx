import profilepicture from './assets/pp.jpg'

function cards(){

    return(
        <div className="card">
            <img className='card-image' src={profilepicture} alt="Profile Picture" />

            <h2 className='card-title'>Vipul Bhange</h2>
            <p className='card-text'> I like to play chess and coding</p>
        </div>
    );

}
export default cards;