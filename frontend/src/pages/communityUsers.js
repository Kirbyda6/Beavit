import React from "react";
import { useNavigate ,Link } from "react-router-dom";
import { MdOutlineEditNote, MdDeleteForever } from "react-icons/md";

function CommunityUsers() {
    const navigate = useNavigate()
    return(
        <div>
            <span className="nav-bar">
                <h1 id='beavit' onClick={() => navigate('/')}>Beavit</h1>
                <Link to='/users'> Users </Link>
                <Link to='/posts'> Posts </Link>
                <Link to='/comments'> Comments </Link>
                <Link to='/communities'> Communities </Link>
                <Link to='/communityUsers' id="current-page"> Community Users </Link>
            </span>
            <div className="content">
                <table>
                    <thead><tr><th>User</th><th>Community</th><th>Moderator Status</th></tr></thead>
                    <tbody>
                        <tr>
                            <td>Billy</td>
                            <td>OSU</td>
                            <td>0</td>
                            <td><MdOutlineEditNote id="icon"/></td>
                            <td><MdDeleteForever id="icon"/></td>
                        </tr>
                        <tr>
                            <td>Billy</td>
                            <td>Pets</td>
                            <td>1</td>
                            <td><MdOutlineEditNote id="icon"/></td>
                            <td><MdDeleteForever id="icon"/></td>
                        </tr>
                        <tr>
                            <td>Bob</td>
                            <td>OSU</td>
                            <td>0</td>
                            <td><MdOutlineEditNote id="icon"/></td>
                            <td><MdDeleteForever id="icon"/></td>
                        </tr>
                        <tr>
                            <td>Bob</td>
                            <td>Pets</td>
                            <td>1</td>
                            <td><MdOutlineEditNote id="icon"/></td>
                            <td><MdDeleteForever id="icon"/></td>
                        </tr>
                        <tr>
                            <td>Bob</td>
                            <td>Movies</td>
                            <td>0</td>
                            <td><MdOutlineEditNote id="icon"/></td>
                            <td><MdDeleteForever id="icon"/></td>
                        </tr>
                        <tr>
                            <td>Jill</td>
                            <td>OSU</td>
                            <td>0</td>
                            <td><MdOutlineEditNote id="icon"/></td>
                            <td><MdDeleteForever id="icon"/></td>
                        </tr>
                        <tr>
                            <td>Jane</td>
                            <td>Movies</td>
                            <td>0</td>
                            <td><MdOutlineEditNote id="icon"/></td>
                            <td><MdDeleteForever id="icon"/></td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={() => navigate('/addComUsr')}>Add A User To A Community</button>
            </div>
            
        </div>
    );
}

export default CommunityUsers;