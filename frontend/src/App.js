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

function App() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [comms, setComms] = useState([]);
    const [commsUsrs, setcommsUsrs] = useState([]);

    const loadPosts = async () => {
        await fetch('http://flip2.engr.oregonstate.edu:7352/db', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            // mode: 'no-cors'
        })
        .then(res => {return res.json()})
        .then(result => {setPosts(result)})
    }

    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <div id='app'>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/posts" element={<Posts posts={posts} />} />
                    <Route path="/editPost" element={<EditPost />} />
                    <Route path="/makePost" element={<MakePost />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/addUser" element={<AddUser />} />
                    <Route path="/communities" element={<Communities />} />
                    <Route path="/addComm" element={<AddComm />} />
                    <Route path="/comments" element={<Comments />} />
                    <Route path="/newComment" element={<MakeComment />} />
                    <Route path="/editComment" element={<EditComment />} />
                    <Route path="/communityUsers" element={<CommunityUsers />} />
                    <Route path="/addComUsr" element={<AddCommUsr />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
