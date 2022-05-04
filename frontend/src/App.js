import './App.css';
import React from 'react';
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

function App() {
  return (
    <div id='frontpage'>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/communities" element={<Communities/>}/>
          <Route path="/comments" element={<Comments/>}/>
          <Route path="/communityUsers" element={<CommunityUsers/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
