import React, {useState, useEffect}  from 'react';
import { Link, useNavigate } from "react-router-dom";
import UserComponent from '../components/userComp';
import Axios from "axios";


function Users({users}) {
    const navigate = useNavigate();
    const [userlist, setUserList] = useState([]);

    const loadUsers = () => {
        Axios.get("http://flip2.engr.oregonstate.edu:8056/users").then((result) => {
            // (console.log(result)) For testing
            setUserList(result.data)
        })
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const deleteUser = (username) => {
        Axios.delete(`http://flip2.engr.oregonstate.edu:8056/delete/${username}`)
    };

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
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Join Date</th>
                            <th>Thumbs Up</th>
                            <th>Thumbs Down</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UserComponent users={userlist} deleteUser={deleteUser}/>
                    </tbody>
                </table>
                
                <button onClick={() => navigate('/addUser')}>Add A User</button>
            </div>
        </div>
    );
}

export default Users;