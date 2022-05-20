import React from "react";

function UsrOpt({ user }) {
    return(
        <option value={user.UserID}>{user.Username}</option>
    );
}

export default UsrOpt;