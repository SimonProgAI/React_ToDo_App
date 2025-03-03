import React from "react";

const ProfileForm = ({userRef, createProfile}) =>{
    return(
        <form>
            <label>Name<input ref={userRef} type="text" placeholder="first & last names"></input></label><br></br>
            <label>Objective($)<input type="number" min="50" step="50"></input></label><br></br>
            <button onClick={createProfile}>Create Profile</button>
        </form>
    )
}

export default ProfileForm;