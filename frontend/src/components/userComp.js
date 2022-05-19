import React from "react";
import UserRow from "./userRow";
import Axios from "axios";

function UserComponent ({ users, deleteUser }) {
    if (users.length === 0) {
        return(
            <tr>
                <td colSpan={6} style={{textAlign:"center"}}>Empty</td>
            </tr>
        );
    } else {
        return(
            users.map((x, i) => <UserRow user={x}
            deleteUser={deleteUser}
            key={i}
            />)
        );
    }
}

export default UserComponent