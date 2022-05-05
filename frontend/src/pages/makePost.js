import React from "react";
import { useNavigate, Link } from "react-router-dom";

function MakePost() {
    const navigate = useNavigate()
    return(
        <div>
            <Link to='/posts'>Cancel</Link>
            <fieldset>
                <legend>Make Post</legend>
                <label for="Poster">Poster: </label>
                <input type='text' name="Poster"/><br></br>
                <label for="Title">Title: </label>
                <input type='text' name="Title"/><br></br>
                <label for="Community">Community: </label>
                <input type='text' name="Community"/><br></br>
                <button onClick={() => navigate('/posts')}>Post</button>
            </fieldset>
        </div>
    );
}

export default MakePost;