import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever, MdAddModerator, MdRemoveModerator } from "react-icons/md";

function CommUsrRow ({ commUsr, reren, setRerender, usrs, comms }) {
    const navigate = useNavigate()

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
            <td><MdDeleteForever id="icon" onClick={() => deleteCommUsr()}/></td>
            <td><MdAddModerator id="icon" onClick={() => AddMod()}/></td>
            <td><MdRemoveModerator id="icon" onClick={() => removeMod()}/></td>
        </tr>
    );
}

export default CommUsrRow;
