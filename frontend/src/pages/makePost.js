import React from "react";
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
                <label htmlFor="Community">Community: </label>
                <input type='text' name="Community" className="txtbar"/><br></br>
                <button onClick={() => navigate('/posts')}>Post</button>
            </fieldset>
        </div>
    );
}

export default MakePost;