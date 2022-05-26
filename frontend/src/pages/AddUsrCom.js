import { React, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import UserOptions from "../components/userOptions";
import CommOptions from "../components/commOptions";

function AddCommUsr({ reren, setRerender, users, comms }) {
    const navigate = useNavigate()

    const [user, setUser] = useState(users[0].UserID)
    const [comm, setComm] = useState(comms[0].CommunityID)
    const [mod, setMod] = useState(0)

    const subscribe = async () => {
        await fetch('http://flip2.engr.oregonstate.edu:7352/usrComm', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: user,
                comm: comm,
                mod: mod
            })
        })
        .then(() => {setRerender(!reren)})
        .then(() => {navigate('/communityUsers')})
    }

    return(
        <div>
            <Link to='/communityUsers'>Cancel</Link>
            <fieldset>
                <legend>Add A User To A Community</legend>
                <label htmlFor='User'>User: </label>
                <select className="txtbar" name="User" defaultValue={users[0].UserID} onChange={i => setUser(i.target.value)}>
                    <UserOptions users={users}/>
                </select><br></br>

                <label htmlFor='Community'>Community: </label>
                <select className="txtbar" name="Community" defaultValue={comms[0].CommunityID} onChange={i => setComm(i.target.value)}>
                    <CommOptions comms={comms}/>
                </select><br></br>
                
                <label htmlFor='Mod'>Moderator Status: </label>
                <select name='Mod' onChange={i => setMod(i.target.value)}>
                    <option value={0}>Is a Moderator of this community</option>
                    <option value={1}>Not a Moderator of this community</option>
                </select><br></br>

                <button onClick={() => subscribe()}>Add</button>
            </fieldset>
        </div>
    );
}

export default AddCommUsr