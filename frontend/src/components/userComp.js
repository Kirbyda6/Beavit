import React from "react";
import UserRow from "./userRow";

function UserComponent ({ users, reren, setRerender}) {
    if (users.length === 0) {
        return(
            <tr>
                <td colSpan={6} style={{textAlign:"center"}}>Empty</td>
            </tr>
        );
    } else {
        return(
            users.map((x, i) => <UserRow 
            user={x}
            reren={reren} 
            setRerender={setRerender}
            key={i}
            />)
        );
    }
}

export default UserComponent;