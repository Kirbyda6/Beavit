import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CommentComp from "../components/commentComp";

function Comments({ comments, setCurComnt, reren, setRerender, posts, users }) {
    const navigate = useNavigate()

    const makeCmnt = () => {
        if(users.length != 0 && posts.length != 0) {
            navigate('/newComment')
        } else {
            alert("There must be at least one user and one post to comment!")
        }
    }

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
                <button onClick={() => makeCmnt()}>New Comment</button>
            </div>
        </div>
    );
}

export default Comments;