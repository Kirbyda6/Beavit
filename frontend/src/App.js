import './App.css';
import { React, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Homepage from './pages/homepage';
import Users from './pages/users';
import Posts from './pages/posts';
import Communities from './pages/communities';
import Comments from './pages/comments';
import CommunityUsers from './pages/communityUsers';
import AddUser from './pages/addUser';
import EditPost from './pages/editPost';
import AddComm from './pages/addComm';
import MakeComment from './pages/makeComment';
import EditComment from './pages/editComment';
import MakePost from './pages/makePost';
import AddCommUsr from './pages/AddUsrCom';
import DisplaySearchUser from './pages/userSearchResults';
//import Axios from 'axios';

function App() {
    //LINES BELOW ARE LOADING USER DATA VIA FETCH AND/OR AXIOS. CURRENTLY LOADS DATA IN Users.JS INSTEAD
    // const loadUsers = async () => {
    //     await fetch('http://flip2.engr.oregonstate.edu:8056/users', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         // mode: 'no-cors'
    //     })
    //     .then(res => {return res.json()})
    //     .then(result => {setUsers(result)})
    // }


    //LINES BELOW ARE FOR IF WE WANT THIS DATA TO BE LOADED THROUGH THIS FILE INSTEAD OF Users.JS
    // const loadUsers = () => {
    //     Axios.get("http://flip2.engr.oregonstate.edu:8056/users").then((response) => {
    //         (console.log(response))
    //         setUsers(response.data)
    //     })
    // };

    // useEffect(() => {
    //     loadUsers();
    // }, []);

    const [rerender, setRerender] = useState(true);
    const [users, setUsers] = useState([]);
    const [searchUser, setSearchUser] = useState([]);
    const [posts, setPosts] = useState([]);
    const [curPost, setCurPost] = useState([]);
    const [curComnt, setCurComnt] = useState([]);
    const [comments, setComments] = useState([]);
    const [comms, setComms] = useState([]);
    const [commsUsrs, setCommsUsrs] = useState([]);

    const loadTables = async () => {
        await fetch('http://flip2.engr.oregonstate.edu:7352/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {return res.json()})
        .then(result => {setUsers(result)})

        await fetch('http://flip2.engr.oregonstate.edu:7352/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {return res.json()})
        .then(result => {setPosts(result)})

        await fetch('http://flip2.engr.oregonstate.edu:7352/comments', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {return res.json()})
        .then(result => {setComments(result)})

        await fetch('http://flip2.engr.oregonstate.edu:7352/comms', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {return res.json()})
        .then(result => {setComms(result)})

        await fetch('http://flip2.engr.oregonstate.edu:7352/commsUsrs', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {return res.json()})
        .then(result => {setCommsUsrs(result)})
    }

    useEffect(() => {
        loadTables();
    }, [rerender]);

    return (
        <div id='app'>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/posts" element={<Posts posts={posts} setCurPost={setCurPost} reren={rerender} setRerender={setRerender} />} />
                    <Route path="/editPost" element={<EditPost curPost={curPost} reren={rerender} setRerender={setRerender} comms={comms} users={users} />} />
                    <Route path="/makePost" element={<MakePost reren={rerender} setRerender={setRerender} users={users} comms={comms} />} />
                    <Route path="/users" element={<Users users={users} searchUser={searchUser} setSearchUser={setSearchUser} reren={rerender} setRerender={setRerender}/>} />
                    <Route path="/userSearchResults" element={<DisplaySearchUser searchUser={searchUser} reren={rerender} setRerender={setRerender}/>} />
                    <Route path="/addUser" element={<AddUser reren={rerender} setRerender={setRerender}/>} />
                    <Route path="/communities" element={<Communities comms={comms} reren={rerender} setRerender={setRerender} />} />
                    <Route path="/addComm" element={<AddComm reren={rerender} setRerender={setRerender} />} />
                    <Route path="/comments" element={<Comments comments={comments} setCurComnt={setCurComnt} reren={rerender} setRerender={setRerender} />} />
                    <Route path="/newComment" element={<MakeComment comments={comments} posts={posts} users={users} reren={rerender} setRerender={setRerender} />} />
                    <Route path="/editComment" element={<EditComment curComnt={curComnt} reren={rerender} setRerender={setRerender} posts={posts} cmts={comments} users={users} />} />
                    <Route path="/communityUsers" element={<CommunityUsers commUsrs={commsUsrs} reren={rerender} setRerender={setRerender} usrs={users} comms={comms} />} />
                    <Route path="/addComUsr" element={<AddCommUsr reren={rerender} setRerender={setRerender} users={users} comms={comms} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;