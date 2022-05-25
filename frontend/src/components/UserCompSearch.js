import React from "react";
import UserRow from "./userRow";
import Axios from "axios";

function UserComponentSearch ({ searchUser, reren, setRerender}) {
    console.log(searchUser)
    if (searchUser.length === 0) {
        return(
            <tr>
                <td>asdasd</td>
                <td colSpan={6} style={{textAlign:"center"}}>Empty</td>
            </tr>
        );
    } else {
        return(
            searchUser.map((x, i) => <UserRow 
            user={x}
            reren={reren} 
            setRerender={setRerender}
            // deleteUser={deleteUser}
            key={i}
            />)
        );
    }
}

export default UserComponentSearch;