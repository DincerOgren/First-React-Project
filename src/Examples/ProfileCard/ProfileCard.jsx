import PropTypes from "prop-types";

import "./ProfileCard.css" 

function ProfileCard({name, age,isMember, onPropertyClick}){

    

    return(
    <div className="profile-card">
        <h3 onClick={() => onPropertyClick(name)}>Name: {name}</h3>
        <h3 onClick={() => onPropertyClick(age)}>Age: {age}</h3>
        <h3 
        onClick={() => onPropertyClick(isMember)}
        className={isMember ? "is-member" : "not-member"} // Dynamic class
        >
        Status: {isMember ? "Is Member" : "Is not member"}
        </h3>
    </div>
    )

}

export default ProfileCard