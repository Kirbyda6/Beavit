import React from "react";

function CommOpt({ comm }) {
    return(
        <option value={comm.CommunityID}>{comm.CommunityName}</option>
    );
}

export default CommOpt;