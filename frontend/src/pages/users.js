import React, {useState, useEffect}  from 'react';
import { Link, useNavigate } from "react-router-dom";
import UserComponent from '../components/userComp';


function Users({users, reren, setRerender, searchUser, setSearchUser}) {
    const navigate = useNavigate();
    const [searchUsername, setSearchUsername] = useState('');

    const searchResult = async (searchUsername) => {
        if (searchUsername != 0) {
            let results = await fetch(`http://flip2.engr.oregonstate.edu:7352/users/${searchUsername}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then((res) => {
                return res.json()
            })
            .then((searchData) => {
                setSearchUser(searchData)
            })
            .then(navigate('/userSearchResults'))
        } else {
            alert("You didn't enter a username")
        }
    }
    
    
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
                    <input 
                    type='text' 
                    name='usrname' 
                    className="txtbar" 
                    placeholder="Search For Username"
                    onChange={event => setSearchUsername(event.target.value)}
                    ></input>
                    <button onClick={() => {searchResult(searchUsername)}}>Search</button>
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
                        <UserComponent users={users} reren={reren} setRerender={setRerender}/> 
                    </tbody>
                </table>
                
                <button onClick={() => navigate('/addUser')}>Add A User</button>
            </div>
        </div>
    );
}

export default Users;