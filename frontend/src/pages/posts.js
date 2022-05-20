import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PostComponent from "../components/postComp";

function Posts({ posts, setCurPost, reren, setRerender }) {
    const navigate = useNavigate()
    return(
        <div>
            <span className="nav-bar">
                <h1 id='beavit' onClick={() => navigate('/')}>Beavit</h1>
                <Link to='/users'> Users </Link>
                <Link to='/posts' id="current-page"> Posts </Link>
                <Link to='/comments'> Comments </Link>
                <Link to='/communities'> Communities </Link>
                <Link to='/communityUsers'> Community Users </Link>
            </span>
            
            <div className="content">
                <table>
                    <thead>
                        <tr>
                            <th>Poster</th>
                            <th>Post Title</th>
                            <th>Thumbs Up</th>
                            <th>Thumbs Down</th>
                            <th>Date Posted</th>
                            <th>Community</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PostComponent posts={posts} setCurPost={setCurPost} reren={reren} setRerender={setRerender} />
                    </tbody>
                </table>
                <button onClick={() => navigate('/makePost')}>Make A Post</button>
            </div>
        </div>
    );
}

export default Posts;