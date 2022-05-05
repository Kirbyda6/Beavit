import React from "react";
import { useNavigate, Link } from "react-router-dom";

function EditComment() {
    const navigate = useNavigate()
    return(
        <div>
            <Link to='/comments'>Cancel</Link>
            <fieldset>
                <legend>Edit Comment</legend>
                <label for="Made By">Made By: </label>
                <input type='text' name="Made By" value='Billy'/><br></br>
                <label for="Date Made">Date Made: </label>
                <input type='datetime-local' name="Date Made" value='2021-11-07T00:00'/><br></br>
                <label for="Thumbs up">Thumbs Up Count: </label>
                <input type='text' name="Thumbs up" value={20}/><br></br>
                <label for="Thumbs down">Thumbs Down Count: </label>
                <input type='text' name="Thumbs down" value={3}/><br></br>
                <label for="Comment">Comment: </label>
                <input type='text' name="Comment" value='I think you should take CS 271!'/><br></br>
                <label for="Post">Parent Post: </label>
                <select name="Post">
                    <option value={1111}>What class should I take next quarter?</option>
                    <option value={2222}>Check out my cute dog!</option>
                    <option value={3333}>Should I see the latest Marvel movie?</option>
                </select><br></br>
                <label for="Reply">Replying to: </label>
                <select name="Reply">
                    <option value={null}>NULL</option>
                    <option value={1}>I think you should take CS 271!</option>
                    <option value={2}>Yes! I thought it was a lot better than the last Marvel movie.</option>
                    <option value={3}>I really liked CS 361 and recommend it for Winter quarter.</option>
                    <option value={4}>Me too! I'm looking forward to the sequal.</option>
                    <option value={5}>So cute! Looks just like mine!</option>
                </select><br></br>
                <button onClick={() => navigate('/comments')}>Save</button>
            </fieldset>
        </div>
    );
}

export default EditComment;