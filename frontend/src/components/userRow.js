import React from "react";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import Axios from "axios";


function UserRow ({ user, setCurUser, reren, setRerender }) {
    const navigate = useNavigate()
    
    const deleteUser = async (username) => {
        const url = `http://flip3.engr.oregonstate.edu:8056/users/${username}`
        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(setRerender(!reren))
    }

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