import React from "react";
import { MdDeleteForever } from "react-icons/md";


function UserRow ({ user }) {
    
    return(
        <tr>
            <td>{user.Username}</td>
            <td>{user.JoinDate}</td>
            <td>{user.ThumbsUpCt}</td>
            <td>{user.ThumbsDwnCt}</td>
            <td><MdDeleteForever id="icon"/></td>
        </tr>
    );
}

export default UserRow