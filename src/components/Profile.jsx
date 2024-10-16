function Profile({name, surname, profession}) {
    return (
        <div className="profile" >
            <img className="profile-img" src="https://via.placeholder.com/110x116" />
            <div>
                <h3 className="name">{name}</h3>
                <h2 className="surname">{surname}</h2>
                <p className="profession">{profession}</p>
            </div>  
        </div>
    )
}

export default Profile;



