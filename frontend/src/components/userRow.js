import React from "react";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";



function UserRow ({ user, reren, setRerender}) {
    const navigate = useNavigate()
    const date = new Date(user.JoinDate);
    const opts = { year:"numeric", month:"short", day:"numeric"}
    
    const deleteUser = async (username) => {
        const url = `http://flip2.engr.oregonstate.edu:7352/delete/${username}`
        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(setRerender(!reren))
        .then(navigate('/users'))
    }

    return(
        <tr>
            <td>{user.Username}</td>
            <td>{date.toLocaleDateString('en-us', opts)}</td>
            <td>{user.ThumbsUpCt}</td>
            <td>{user.ThumbsDwnCt}</td>
            <td style={{backgroundColor: "#030303"}}>
                <div className="tooltip">
                    <MdDeleteForever id="icon" onClick = {() => deleteUser(user.Username)}/>
                    <span className="tooltext">Delete User</span>
                </div>
            </td>
        </tr>
    );
}

export default UserRow