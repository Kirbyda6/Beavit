import {React, useState} from 'react';
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios";

function AddUser({ reren, setRerender }) {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [userJoinDate, setUserJoinDate] = useState("");
    const [userThumbsUp, setUserThumbsUp] = useState(0);
    const [userThumbsDown, setUserThumbsDown] = useState(0);

    // const addUser = () => {
    //     Axios.post("http://flip2.engr.oregonstate.edu:8056/addUser", { //using axios to send info in object from React to backend
    //         username: username,
    //         userJoinDate: userJoinDate,
    //         userThumbsUp: userThumbsUp,
    //         userThumbsDown: userThumbsDown,
    //     })
    //     .then(() => {console.log ("User added")})
    //     .then(() => {setRerender(!reren)})
    //     .then(() => {navigate('/users')})
    //      // sends user back to the Users page after addition
    // };
    const createUser = async () => {
        await fetch('http://flip2.engr.oregonstate.edu:7352/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                userJoinDate: userJoinDate,
                userThumbsUp: userThumbsUp,
                userThumbsDown: userThumbsDown
            })
        })
        .then(() => {setRerender(!reren)})
        .then(() => {navigate('/users')})
    }

    return(
        <div>
            <Link to='/users'>Cancel</Link>
            
            <fieldset>
                <legend>New User</legend>

                <label htmlFor="username">Username: </label>
                <input 
                type='text' 
                value = {username}
                name="username" 
                className="txtbar"
                onChange= {(event) => {setUsername(event.target.value)}}
                /> <br></br>

                <label htmlFor="userJoinDate">Join Date: </label>
                <input type='date' 
                name="userJoinDate"
                value = {userJoinDate}
                className="txtbar"
                onChange= {(event) => {setUserJoinDate(event.target.value)}}
                /><br></br>

                <label htmlFor="userThumbsUp">User's Thumbs Up Total: </label>
                <input type='number'
                value = {userThumbsUp} 
                name="userThumbsUp" 
                className="txtbar"
                onChange= {(event) => {setUserThumbsUp(event.target.value)}}
                /><br></br>

                <label htmlFor="userThumbsDown">User's Thumbs Down Total: </label>
                <input type='number'
                value ={userThumbsDown}
                name="userThumbsDown" 
                className="txtbar"
                onChange= {(event) => {setUserThumbsDown(event.target.value)}}
                /><br></br>

                <button onClick={() => createUser()}>Add</button>
            </fieldset>
            
        </div>
    );
}

export default AddUser;