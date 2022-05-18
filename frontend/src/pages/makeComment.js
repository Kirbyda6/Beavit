import React, {useState} from 'react';
import { useNavigate, Link } from "react-router-dom";

function MakeComment() {
    const navigate = useNavigate()
    return(
        <div>
            <Link to='/comments'>Cancel</Link>
            <fieldset>
                <legend>Make Comment</legend>

                <label htmlFor="Made By">Made By: </label>
                <input type='text' name="Made By" className="txtbar"/><br></br>

                <label htmlFor="dateMade">Date Made: </label>
                <input type='date' name="dateMade" className="txtbar"/><br></br>

                <label htmlFor="commentThumbsUp">Comment's Thumbs Up Total: </label>
                <input type='number' name="commentThumbsUp" className="txtbar"/><br></br>

                <label htmlFor="commentThumbsDown">Comment's Thumbs Down Total: </label>
                <input type='number' name="commentThumbsDown" className="txtbar"/><br></br>

                <label htmlFor="Comment">Comment: </label>
                <input type='text' name="Comment" className="txtbar"/><br></br>

                <label htmlFor="Post">Parent Post: </label>
                <select name="Post">
                    <option value={1111}>What class should I take next quarter?</option>
                    <option value={2222}>Check out my cute dog!</option>
                    <option value={3333}>Should I see the latest Marvel movie?</option>
                </select><br></br>

                <label htmlFor="Reply">Replying to: </label>               
                <select name="Reply">
                    <option value={null}>NULL</option>
                    <option value={1}>I think you should take CS 271!</option>
                    <option value={2}>Yes! I thought it was a lot better than the last Marvel movie.</option>
                    <option value={3}>I really liked CS 361 and recommend it for Winter quarter.</option>
                    <option value={4}>Me too! I'm looking forward to the sequal.</option>
                    <option value={5}>So cute! Looks just like mine!</option>
                </select><br></br>

                <button onClick={() => navigate('/comments')}>Add</button>
            </fieldset>
        </div>
    );
}

export default MakeComment;