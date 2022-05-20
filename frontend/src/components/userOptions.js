import React from "react";
import UsrOpt from "./usrOpt";

function UserOptions({ users }) {
    return(
        users.map((x, i) => <UsrOpt user={x} key={i}/>)
    );
}

export default UserOptions;