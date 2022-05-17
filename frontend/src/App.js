import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { useState } from 'react';
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
  return (
    <div id='frontpage'>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/editPost" element={<EditPost/>}/>
          <Route path="/makePost" element={<MakePost/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/addUser" element={<AddUser/>}/>
          <Route path="/communities" element={<Communities/>}/>
          <Route path="/addComm" element={<AddComm/>}/>
          <Route path="/comments" element={<Comments/>}/>
          <Route path="/newComment" element={<MakeComment/>}/>
          <Route path="/editComment" element={<EditComment/>}/>
          <Route path="/communityUsers" element={<CommunityUsers/>}/>
          <Route path="/addComUsr" element={<AddCommUsr/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
