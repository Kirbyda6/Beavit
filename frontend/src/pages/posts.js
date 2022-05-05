import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineEditNote, MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Posts() {
    const navigate = useNavigate()
    return(
        <div>
            <button onClick={() => navigate('/makePost')}>Make Post</button>
            <Link to='/'>Homepage</Link>
            <table id='postTable'>
                <th>Poster</th><th>Post Title</th><th>Thumbs Up Count</th><th>Thumbs Down Count</th><th>Date Posted</th><th>Community</th>
                <tr>
                    <td>Bob</td>
                    <td>What class should I take next quarter?</td>
                    <td>80</td>
                    <td>1</td>
                    <td>2021-11-07 00:00:00</td>
                    <td>OSU</td>
                    <td><MdOutlineEditNote id="icon" onClick={() => navigate('/editPost')}/></td>
                    <td><MdDeleteForever id="icon"/></td>
                </tr>
                <tr>
                    <td>Billy</td>
                    <td>Check out my cute dog!</td>
                    <td>102</td>
                    <td>2</td>
                    <td>2021-11-07 00:00:00</td>
                    <td>Pets</td>
                    <td><MdOutlineEditNote id="icon" onClick={() => navigate('/editPost')}/></td>
                    <td><MdDeleteForever id="icon"/></td>
                </tr>
                <tr>
                    <td>Jane</td>
                    <td>Should I see the latest Marvel movie?</td>
                    <td>94</td>
                    <td>2</td>
                    <td>2021-11-07 00:00:00</td>
                    <td>Movies</td>
                    <td><MdOutlineEditNote id="icon" onClick={() => navigate('/editPost')}/></td>
                    <td><MdDeleteForever id="icon"/></td>
                </tr>
            </table>
        </div>
    );
}

export default Posts;