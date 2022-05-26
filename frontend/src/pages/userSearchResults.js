import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserComponentSearch from "../components/UserCompSearch";
import UserRow from "../components/userRow";

function DisplaySearchUser({searchUser, reren, setRerender}) {
    const navigate = useNavigate()
    console.log(searchUser)

    return(
        <div>
            <Link to='/users'>Return to All Users</Link>
        
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Join Date</th>
                            <th>Thumbs Up</th>
                            <th>Thumbs Down</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UserComponentSearch searchUser={searchUser} reren={reren} setRerender={setRerender}/> 
                    </tbody>
                </table>
                
                <button onClick={() => navigate('/addUser')}>Add A User</button>
        </div>
    );
}

export default DisplaySearchUser;