import React from "react";

const ProfileOutput = ({user, objective}) => {
    return(
        <div>
           <h2>{user} ${objective}</h2>
        </div>
    )
}

export default ProfileOutput;