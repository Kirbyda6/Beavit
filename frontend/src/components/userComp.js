import React from "react";
import UserRow from "./userRow";

function UserComponent ({ users }) {
    if (users.length === 0) {
        return(
            <tr>
                <td colSpan={6} style={{textAlign:"center"}}>Empty</td>
            </tr>
        );
    } else {
        return(
            users.map((x, i) => <UserRow user={x} key={i}/>)
        );
    }
}

export default UserComponent