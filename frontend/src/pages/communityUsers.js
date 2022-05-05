import React from "react";
import { useNavigate ,Link } from "react-router-dom";
import { MdOutlineEditNote, MdDeleteForever } from "react-icons/md";

function CommunityUsers() {
    const navigate = useNavigate()
    return(
        <div>
            <button onClick={() => navigate('/addComUsr')}>Add User To A Community</button>
            <Link to='/'>Homepage</Link>
            <table id='commUserTable'>
                <th>User</th><th>Community</th><th>Moderator Status</th>
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
            </table>
        </div>
    );
}

export default CommunityUsers;