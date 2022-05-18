import React, {useState} from 'react';
import { useNavigate, Link } from "react-router-dom";

function Users() {
    const navigate = useNavigate();

    const [username, setName] = useState("");
    const [userJoinDate, setUserJoinDate] = useState();
    const [userThumbsUp, setUserThumbsUp] = useState(0);
    const [userThumbsDown, setUserThumbsDown] = useState(0);

    return(
        <div>
            <Link to='/users'>Cancel</Link>
            <fieldset>
                <legend>New User</legend>

                <label htmlFor="username">Username: </label>
                <input 
                type='text' 
                name="username" 
                className="txtbar"
                /><br></br>

                <label htmlFor="userJoinDate">Join Date: </label>
                <input type='date' name="userJoinDate" className="txtbar"/><br></br>

                <label htmlFor="userThumbsUp">User's Thumbs Up Total: </label>
                <input type='number' name="userThumbsUp" className="txtbar"/><br></br>

                <label htmlFor="userThumbsDown">User's Thumbs Down Total: </label>
                <input type='number' name="userThumbsDown" className="txtbar"/><br></br>

                <button onClick={() => navigate('/users')}>Add</button>
            </fieldset>
            
        </div>
    );
}

export default Users;