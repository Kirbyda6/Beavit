import { React, useState } from "react";
import { MdDeleteForever, MdAddModerator, MdRemoveModerator } from "react-icons/md";

function CommUsrRow ({ commUsr, reren, setRerender, usrs, comms }) {
    const [username, setUsername] = useState()
    const [commName, setCommName] = useState()

    fetch(`http://flip2.engr.oregonstate.edu:7352/usrSearch/${commUsr.Users_UserID}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {return res.json()})
    .then(result => {setUsername(result[0].Username)})

    fetch(`http://flip2.engr.oregonstate.edu:7352/commSearch/${commUsr.Communities_CommunityID}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {return res.json()})
    .then(result => {setCommName(result[0].CommunityName)})

    const deleteCommUsr = async () => {
        const url = `http://flip2.engr.oregonstate.edu:7352/commUsrs/${commUsr.Users_UserID}/${commUsr.Communities_CommunityID}`
        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(setRerender(!reren))
    }

    const AddMod = async () => {
        const url = `http://flip2.engr.oregonstate.edu:7352/addMod/${commUsr.Users_UserID}/${commUsr.Communities_CommunityID}`
        await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(setRerender(!reren))
    }

    const removeMod = async () => {
        const url = `http://flip2.engr.oregonstate.edu:7352/remMod/${commUsr.Users_UserID}/${commUsr.Communities_CommunityID}`
        await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(setRerender(!reren))
    }

    return(
        <tr>
            <td>{username}</td>
            <td>{commName}</td>
            <td>{commUsr.ModeratorStatus}</td>
            <td style={{backgroundColor: "#030303"}}>
                <div className="tooltip">
                    <MdDeleteForever id="icon" onClick={() => deleteCommUsr()}/>
                    <span className="tooltext">Delete Community User</span>
                </div>
                <div className="tooltip">
                    <MdAddModerator id="icon" onClick={() => AddMod()}/>
                    <span className="tooltext">Make Moderator</span>
                </div>
                <div className="tooltip">
                    <MdRemoveModerator id="icon" onClick={() => removeMod()}/>
                    <span className="tooltext">Take Away Moderator</span>
                </div>
            </td>
        </tr>
    );
}

export default CommUsrRow;
