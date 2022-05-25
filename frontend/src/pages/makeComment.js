import { React, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import UserOptions from '../components/userOptions';
import PostOptions from '../components/postOptions';
import CmntOptions from '../components/cmntOptions';

function MakeComment({ comments, posts, users, reren, setRerender }) {
    const navigate = useNavigate()

    const [usr, setUsr] = useState(comments[0].Commenter_UserID)
    const [date, setDate] = useState()
    const [thmbUp, setThmbUp] = useState()
    const [thmbDwn, setThmbDwn] = useState()
    const [comment, setComment] = useState()
    const [parentPost, setParentPost] = useState(comments[0].Parent_Post_PostID)
    const [parentCmnt, setParentCmnt] = useState(comments[0].Parent_Comment_CommentID)

    const makeCmnt = async () => {
        if(thmbUp >= 0 && thmbDwn >= 0 && comment != undefined) {
            await fetch('http://flip2.engr.oregonstate.edu:7352/comments', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: usr,
                    date: date,
                    thmbsUp: thmbUp,
                    ThmbsDwn: thmbDwn,
                    comment: comment,
                    parentPost: parentPost,
                    parentCmnt: parentCmnt
                })
            })
            .then(() => {setRerender(!reren)})
            .then(() => {navigate('/comments')})            
        } else {
            alert("Thumbs Up and Thumbs Down must be positive integers and fields must be filled!")
        }
    }

    return(
        <div>
            <Link to='/comments'>Cancel</Link>
            <fieldset>
                <legend>Make Comment</legend>

                <label htmlFor="Made By">Made By: </label>
                <select name="Made By" className="txtbar" defaultValue={comments[0].Commenter_UserID} onChange={i => setUsr(i.target.value)}>
                    <UserOptions users={users}/>
                </select><br></br>

                <label htmlFor="dateMade">Date Made: </label>
                <input type='date' name="dateMade" className="txtbar" onChange={i => setDate(i.target.value)}/><br></br>

                <label htmlFor="commentThumbsUp">Comment's Thumbs Up Total: </label>
                <input type='number' name="commentThumbsUp" className="txtbar" onChange={i => setThmbUp(i.target.value)}/><br></br>

                <label htmlFor="commentThumbsDown">Comment's Thumbs Down Total: </label>
                <input type='number' name="commentThumbsDown" className="txtbar" onChange={i => setThmbDwn(i.target.value)}/><br></br>

                <label htmlFor="Comment">Comment: </label>
                <input type='text' name="Comment" className="txtbar" onChange={i => setComment(i.target.value)}/><br></br>

                <label htmlFor="Post">Parent Post: </label>
                <select name="Post" className="txtbar" defaultValue={comments[0].Parent_Post_PostID} onChange={i => setParentPost(i.target.value)}>
                    <PostOptions posts={posts}/>
                </select><br></br>

                <label htmlFor="Reply">Replying to: </label>               
                <select name="Reply" className="txtbar" defaultValue={comments[0].Parent_Comment_CommentID} onChange={i => setParentCmnt(i.target.value)}>
                    <option value={null}>NULL</option>
                    <CmntOptions cmts={comments}/>
                </select><br></br>

                <button onClick={() => makeCmnt()}>Add</button>
            </fieldset>
        </div>
    );
}

export default MakeComment;