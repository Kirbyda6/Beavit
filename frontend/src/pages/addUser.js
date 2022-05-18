import React, {useState} from 'react';
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios";

function Users() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [userJoinDate, setUserJoinDate] = useState("");
    const [userThumbsUp, setUserThumbsUp] = useState(0);
    const [userThumbsDown, setUserThumbsDown] = useState(0);

    const addUser = () => {
        Axios.post("http://flip2.engr.oregonstate.edu:8056/addUser", { //using axios to send info in object from React to backend
            username: username,
            userJoinDate: userJoinDate,
            userThumbsUp: userThumbsUp,
            userThumbsDown: userThumbsDown,
        }).then(() => {
            console.log ("User added")
        }); navigate('/users')
    };

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
                onChange= {(event) => {setUsername(event.target.value)}}
                /> <br></br>

                <label htmlFor="userJoinDate">Join Date: </label>
                <input type='date' 
                name="userJoinDate" 
                className="txtbar"
                onChange= {(event) => {setUserJoinDate(event.target.value)}}
                /><br></br>

                <label htmlFor="userThumbsUp">User's Thumbs Up Total: </label>
                <input type='number' 
                name="userThumbsUp" 
                className="txtbar"
                onChange= {(event) => {setUserThumbsUp(event.target.value)}}
                /><br></br>

                <label htmlFor="userThumbsDown">User's Thumbs Down Total: </label>
                <input type='number'
                name="userThumbsDown" 
                className="txtbar"
                onChange= {(event) => {setUserThumbsDown(event.target.value)}}
                /><br></br>

                <button onClick={addUser}>Add</button>
            </fieldset>
            
        </div>
    );
}

export default Users;