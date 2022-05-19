import React from "react";
import { MdDeleteForever } from "react-icons/md";
import Axios from "axios";


function UserRow ({ user, deleteUser }) {

    return(
        <tr>
            <td>{user.Username}</td>
            <td>{user.JoinDate}</td>
            <td>{user.ThumbsUpCt}</td>
            <td>{user.ThumbsDwnCt}</td>
            <td><MdDeleteForever id="icon" onClick = {() => deleteUser(user.Username)}/></td>
        </tr>
    );
}

export default UserRow