import React from "react";
import { useNavigate, Link } from "react-router-dom";

function AddComm() {
    const navigate = useNavigate()
    return(
        <div>
            <Link to='/communities'>Cancel</Link>
            <fieldset>
                <legend>Add A Community</legend>
                <label for='community'>Community Name: </label>
                <input type='text' name="community"/>
                <button onClick={() => navigate('/communities')}>Add</button>
            </fieldset>
        </div>
    );
}

export default AddComm;