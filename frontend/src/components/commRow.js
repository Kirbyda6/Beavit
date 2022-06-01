import React from "react";
import { MdDeleteForever } from "react-icons/md";

function CommRow ({ comm, reren, setRerender }) {
    const deleteComm = async (id) => {
        const url = `http://flip2.engr.oregonstate.edu:7352/community/${id}`
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
            <td>{comm.CommunityName}</td>
            <td>{comm.MemberCt}</td>
            <td style={{backgroundColor: "#030303"}}>
                <div className="tooltip">
                    <MdDeleteForever id="icon" onClick={() => deleteComm(comm.CommunityID)}/>
                    <span className="tooltext">Delete Community</span>
                </div>
            </td>
        </tr>
    );
}

export default CommRow;
