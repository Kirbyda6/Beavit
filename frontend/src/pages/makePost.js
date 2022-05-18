import React, {useState} from 'react';
import { useNavigate, Link } from "react-router-dom";

function MakePost() {
    const navigate = useNavigate()
    return(
        <div>
            <Link to='/posts'>Cancel</Link>
            <fieldset>
                <legend>Make Post</legend>
                <label htmlFor="Poster">Poster: </label>
                <input type='text' name="Poster" className="txtbar"/><br></br>

                <label htmlFor="Title">Title: </label>
                <input type='text' name="Title" className="txtbar"/><br></br>

                <label htmlFor="postThumbsUp">Post's Thumbs Up Total: </label>
                <input type='number' name="postThumbsUp" className="txtbar"/><br></br>

                <label htmlFor="postThumbsDown">Post's Thumbs Down Total: </label>
                <input type='number' name="postThumbsDown" className="txtbar"/><br></br>
                
                <label htmlFor="datePosted">Date Posted: </label>
                <input type='date' name="datePosted" className="txtbar"/><br></br>

                <label htmlFor="Community">Community Posted In: </label>
                <input type='text' name="Community" className="txtbar"/><br></br>

                <button onClick={() => navigate('/posts')}>Post</button>
            </fieldset>
        </div>
    );
}

export default MakePost;