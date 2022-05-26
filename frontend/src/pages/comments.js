import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CommentComp from "../components/commentComp";

function Comments({ comments, setCurComnt, reren, setRerender }) {
    const navigate = useNavigate()
    return(
        <div>
            <span className="nav-bar">
                <h1 id='beavit' onClick={() => navigate('/')}>Beavit</h1>
                <Link to='/users'> Users </Link>
                <Link to='/posts'> Posts </Link>
                <Link to='/comments' id="current-page"> Comments </Link>
                <Link to='/communities'> Communities </Link>
                <Link to='/communityUsers'> Community Users </Link>
            </span>
            <div className="content">
                <table>
                    <thead>
                        <tr>
                            <th>Comment ID</th>
                            <th>Made By</th>
                            <th>Date Made</th>
                            <th>Thumbs Up</th>
                            <th>Thumbs Down</th>
                            <th>Comment</th>
                            <th>Parent Post</th>
                            <th>Parent Comment</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <CommentComp comments={comments} setCurComnt={setCurComnt} reren={reren} setRerender={setRerender} />
                    </tbody>
                </table>
                <button onClick={() => navigate('/newComment')}>New Comment</button>
            </div>
        </div>
    );
}

export default Comments;