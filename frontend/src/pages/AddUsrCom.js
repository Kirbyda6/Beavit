import React from "react";
import { useNavigate, Link } from "react-router-dom";

function AddCommUsr() {
    const navigate = useNavigate()
    return(
        <div>
            <Link to='/communityUsers'>Cancel</Link>
            <fieldset>
                <legend>Add A User To A Community</legend>
                <label htmlFor='User'>User: </label>
                <input type='text' name='User' className="txtbar"></input><br></br>
                <label htmlFor='Community'>Community: </label>
                <input type='text' name='Community' className="txtbar"></input><br></br>
                <label htmlFor='Mod'>Moderator Status: </label>
                <select name='Mod'>
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                </select><br></br>
                <button onClick={() => navigate('/communityUsers')}>Add</button>
            </fieldset>
        </div>
    );
}

export default AddCommUsr