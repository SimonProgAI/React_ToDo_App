import React from "react";

const ProfileOutput = ({user, objective}) => {
    return(
        <div>
           <h1>{user} ${objective}</h1>
        </div>
    )
}

export default ProfileOutput;