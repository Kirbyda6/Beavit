import React from "react";
import { Link, useNavigate } from "react-router-dom";

function EditPost() {
    const navigate = useNavigate()
    return(
        <div>
            <Link to='/posts'>Cancel</Link>
            <fieldset>
                <legend>Edit Post</legend>
                <label for="Poster">Poster: </label>
                <input type='text' name="Poster" defaultValue='Bob'/><br></br>
                <label for="Title">Title: </label>
                <input type='text' name="Title" defaultValue='What class should I take next quarter?'/><br></br>
                <label for="Thumbs Up">Thumbs Up: </label>
                <input type='number' name="Thumbs Up" defaultValue={80}/><br></br>
                <label for="Thumbs Down">Thumbs Down: </label>
                <input type='number' name="Thumbs Down" defaultValue={1}/><br></br>
                <label for="Date Posted">Date Posted: </label>
                <input type='datetime-local' name="Date Posted" value='2021-11-07T00:00'/><br></br>
                <label for="Community">Community: </label>
                <input type='text' name="Community" defaultValue='OSU'/><br></br>
                <button onClick={() => navigate('/posts')}>Save</button>
            </fieldset>
        </div>
    );
}

export default EditPost;