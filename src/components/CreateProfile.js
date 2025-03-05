import React from "react";

const CreateProfile = ({userRef,objectiveRef, createProfile}) =>{
    return(
        <form id="CreateProfileForm">
            <label>Name<input ref={userRef} type="text" placeholder="name"></input></label><br></br>
            <label>Objective($)<input ref={objectiveRef} type="number" placeholder="saving objective" min="50" step="50"></input></label><br></br>
            <button onClick={createProfile}>Create Profile</button>
        </form>
    )
}

export default CreateProfile;