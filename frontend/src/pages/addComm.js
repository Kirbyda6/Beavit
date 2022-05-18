import React, {useState} from 'react';
import { useNavigate, Link } from "react-router-dom";

function AddComm() {
    const navigate = useNavigate()
    return(
        <div>
            <Link to='/communities'>Cancel</Link>
            <fieldset>
                <legend>Add A Community</legend>

                <label htmlFor='community'>Community Name: </label>
                <input type='text' name="community" className="txtbar"/><br></br>

                <label htmlFor="memberCount">Member Count: </label>
                <input type='number' name="memberCount" className="txtbar"/><br></br>

                <button onClick={() => navigate('/communities')}>Add</button>
            </fieldset>
        </div>
    );
}

export default AddComm;