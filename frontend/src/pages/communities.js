import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

function Communities() {
    const navigate = useNavigate();
    return(
        <div>
            <button onClick={() => navigate('/addComm')}>Add Community</button>
            <Link to='/'>Homepage</Link>
            <table id='communityTable'>
                <th>Community Name</th><th>Member Count</th>
                <tr><td>OSU</td><td>159</td><td><MdDeleteForever id="icon"/></td></tr>
                <tr><td>Pets</td><td>20000</td><td><MdDeleteForever id="icon"/></td></tr>
                <tr><td>Movies</td><td>50000</td><td><MdDeleteForever id="icon"/></td></tr>
            </table>
        </div>
    );
}

export default Communities;