import {React, useState} from 'react';
import { useNavigate, Link } from "react-router-dom";


function AddUser({ reren, setRerender }) {
    const navigate = useNavigate();
    

    const [username, setUsername] = useState("");
    const [userJoinDate, setUserJoinDate] = useState("");
    const [userThumbsUp, setUserThumbsUp] = useState(0);
    const [userThumbsDown, setUserThumbsDown] = useState(0);

    const createUser = async () => {
        let min_date = new Date("2015-01-01").valueOf()
        let max_date = new Date("2100-01-01").valueOf()
        let userDate = new Date(userJoinDate).valueOf()
        
        if (username.length > 0 && userDate > min_date && userDate < max_date) {
            await fetch('http://flip2.engr.oregonstate.edu:7352/addUser', {
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
        } else if (username.length === 0){
            alert("Username cannot be blank!")
        } else if (userDate > min_date || userDate < max_date){
            alert("Join Date must be between Jan. 1, 2015 and Jan. 1, 2100")
        }
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