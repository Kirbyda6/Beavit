import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserOptions from "../components/userOptions";
import CommOptions from "../components/commOptions";

function EditPost({ curPost, reren, setRerender, comms, users }) {
    const navigate = useNavigate()

    const [poster, setPoster] = useState(curPost.OP_UserID)
    const [title, setTitle] = useState(curPost.PostTitle)
    const [thbUp, setThbUp] = useState(curPost.ThumbsUpCt)
    const [thbDwn, setThbDwn] = useState(curPost.ThumbsDwnCt)
    const [date, setDate] = useState(curPost.DatePosted.slice(0,19))
    const [comm, setComm] = useState(curPost.Communities_CommunityID)

    const updatePost = async () => {
        await fetch('http://flip3.engr.oregonstate.edu:8057/posts', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                postID: curPost.PostID,
                poster: poster,
                title: title,
                ThumbsUpCt: thbUp,
                ThumbsDwnCt: thbDwn,
                date: date,
                community: comm
            })
        })
        .then(() => {setRerender(!reren)})
        .then(() => {navigate('/posts')})
    }

    return(
        <div>
            <Link to='/posts'>Cancel</Link>
            <fieldset>
                <legend>Edit Post</legend>

                <label htmlFor="Poster">Poster: </label>
                <select className="txtbar" name="Poster" onChange={i => setPoster(i.target.value)}>
                    <option value={null}>--Please pick a User--</option>
                    <UserOptions users={users}/>
                </select><br></br>

                <label htmlFor="Title">Title: </label>
                <input type='text' name="Title" value={title} onChange={i => {setTitle(i.target.value)}} className="txtbar"/><br></br>
                
                <label htmlFor="Thumbs Up">Thumbs Up: </label>
                <input type='number' name="Thumbs Up" value={thbUp} onChange={i => {setThbUp(i.target.value)}} className="txtbar"/><br></br>
                
                <label htmlFor="Thumbs Down">Thumbs Down: </label>
                <input type='number' name="Thumbs Down" value={thbDwn} onChange={i => {setThbDwn(i.target.value)}} className="txtbar"/><br></br>
                
                <label htmlFor="Date Posted">Date Posted: </label>
                <input type='datetime-local' name="Date Posted" value={date} onChange={i => {setDate(i.target.value)}} className="txtbar"/><br></br>
                
                <label htmlFor="Community">Community: </label>
                <select className="txtbar" name="Community" onChange={i => setComm(i.target.value)}>
                    <option value={null}>--Please pick a Community--</option>
                    <CommOptions comms={comms}/>
                </select><br></br>
                
                <button onClick={() => {updatePost()}}>Save</button>
                
            </fieldset>
        </div>
    );
}

export default EditPost;