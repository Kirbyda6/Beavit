import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

function Users() {
    const navigate = useNavigate();
    return(
        <div>
            <span className="nav-bar">
                <h1 id='beavit' onClick={() => navigate('/')}>Beavit</h1>
                <Link to='/users' id="current-page"> Users </Link>
                <Link to='/posts'> Posts </Link>
                <Link to='/comments'> Comments </Link>
                <Link to='/communities'> Communities </Link>
                <Link to='/communityUsers'> Community Users </Link>
            </span>

            <div className="content">
                <div className='search'>
                    <input type='text' name='usrname' className="txtbar" placeholder="Search For Username"></input>
                    <button>Search</button>
                </div>

                <table>
                    <thead><tr><th>Username</th><th>Join Date</th><th>Thumbs Up</th><th>Thumbs Down</th></tr></thead>
                    <tbody>
                        <tr><td>Billy</td><td>2017-06-15</td><td>853</td><td>25</td><td><MdDeleteForever id="icon"/></td></tr>
                        <tr><td>Bob</td><td>2015-09-01</td><td>1013</td><td>16</td><td><MdDeleteForever id="icon"/></td></tr>
                        <tr><td>Jill</td><td>2020-08-17</td><td>215</td><td>8</td><td><MdDeleteForever id="icon"/></td></tr>
                        <tr><td>Jane</td><td>2018-06-21</td><td>912</td><td>9</td><td><MdDeleteForever id="icon"/></td></tr>
                    </tbody>
                </table>
                
                <button onClick={() => navigate('/addUser')}>Add A User</button>
            </div>
        </div>
    );
}

export default Users;