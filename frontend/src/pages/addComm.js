import  { React, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

function AddComm({ reren, setRerender }) {
    const navigate = useNavigate()

    const [comm, setComm] = useState()
    const [cnt, setCnt] = useState()

    const createComm = async () => {
        if(cnt >= 0 && comm != undefined && comm != '') {
            await fetch('http://flip2.engr.oregonstate.edu:8048/community', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    comm: comm,
                    cnt: cnt
                })
            })
            .then(() => {setRerender(!reren)})
            .then(() => {navigate('/communities')})
        } else {
            alert("The fillowing requirements must be met:\n\n"
            + "1) Community Name must be filled\n"
            + "2) Member Count must be a positive integer\n")
        }        
    }

    return(
        <div>
            <Link to='/communities'>Cancel</Link>
            <fieldset>
                <legend>Add A Community</legend>

                <label htmlFor='community'>Community Name: </label>
                <input type='text' name="community" className="txtbar" onChange={i => setComm(i.target.value)}/><br></br>

                <label htmlFor="memberCount">Member Count: </label>
                <input type='number' min={0} name="memberCount" className="txtbar" onChange={i => setCnt(i.target.value)}/><br></br>

                <button onClick={() => createComm()}>Add</button>
            </fieldset>
        </div>
    );
}

export default AddComm;