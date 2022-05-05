import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Users() {
    const navigate = useNavigate();
    return(
        <div>
            <Link to='/users'>Cancel</Link>
            <fieldset>
                <legend>New User</legend>
                <label for="username">Username: </label>
                <input type='text' name="username"/>
                <button onClick={() => navigate('/users')}>Add</button>
            </fieldset>
            
        </div>
    );
}

export default Users;