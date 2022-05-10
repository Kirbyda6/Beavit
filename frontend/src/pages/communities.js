import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

function Communities() {
    const navigate = useNavigate();
    return(
        <div>
            <span className="nav-bar">
                <Link to='/'>Homepage</Link>
                <Link to='/users'> Users </Link>
                <Link to='/posts'> Posts </Link>
                <Link to='/comments'> Comments </Link>
                <Link to='/communities' id="current-page"> Communities </Link>
                <Link to='/communityUsers'> Community Users </Link>
            </span>
            <table id='communityTable'>
                <thead><tr><th>Community Name</th><th>Member Count</th></tr></thead>
                <tbody>
                    <tr><td>OSU</td><td>159</td><td><MdDeleteForever id="icon"/></td></tr>
                    <tr><td>Pets</td><td>20000</td><td><MdDeleteForever id="icon"/></td></tr>
                    <tr><td>Movies</td><td>50000</td><td><MdDeleteForever id="icon"/></td></tr>
                </tbody>
            </table>
            <button onClick={() => navigate('/addComm')}>Add A Community</button>
        </div>
    );
}

export default Communities;