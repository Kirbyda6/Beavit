import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserComponentSearch from "../components/UserCompSearch";


function DisplaySearchUser({searchUser, reren, setRerender}) {
    const navigate = useNavigate()

    if (searchUser.length === 0) {
        return(
        <span>
            <Link to='/users'>Return to All Users</Link>
            <br/><br/><br/>
            <div colSpan={6} style={{textAlign:"center", border: "0.5px solid white", padding:"15px"}}>No Users Found</div>
            <br/>
            <button onClick={() => navigate('/addUser')}>Add A User</button>
        </span>
        )} 
        else {
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

}

export default DisplaySearchUser;