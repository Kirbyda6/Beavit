import { React, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import PostOptions from "../components/postOptions";
import UserOptions from "../components/userOptions";
import CmntOptions from "../components/cmntOptions";

function EditComment({ curComnt, reren, setRerender, posts, cmts, users }) {
    const navigate = useNavigate()

    const [usr, setUsr] = useState(curComnt.Commenter_UserID)
    const [date, setDate] = useState(curComnt.DateMade.slice(0,19))
    const [thmbUp, setThmbUp] = useState(curComnt.ThumbsUpCt)
    const [thmbDwn, setThmbDwn] = useState(curComnt.ThumbsDwnCt)
    const [comment, setComment] = useState(curComnt.CommentStr)
    const [parentPost, setParentPost] = useState(curComnt.Parent_Post_PostID)
    const [parentCmnt, setParentCmnt] = useState(curComnt.Parent_Comment_CommentID)

    const updateCmnt = async () => {
        if(thmbUp >= 0 && thmbDwn >= 0 && comment != undefined) {
            await fetch('http://flip2.engr.oregonstate.edu:7352/comments', {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cmtID: curComnt.CommentID,
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
                <legend>Edit Comment</legend>
                <label htmlFor="Made By">Made By: </label>
                <select name="Made By" className="txtbar" defaultValue={curComnt.Commenter_UserID} onChange={i => setUsr(i.target.value)}>
                    <UserOptions users={users}/>
                </select><br></br>
                <label htmlFor="Date Made">Date Made: </label>
                <input type='datetime-local' name="Date Made" value={date} className="txtbar" onChange={i => setDate(i.target.value)}/><br></br>
                <label htmlFor="Thumbs up">Thumbs Up Count: </label>
                <input type='number' name="Thumbs up" value={thmbUp} className="txtbar" onChange={i => setThmbUp(i.target.value)}/><br></br>
                <label htmlFor="Thumbs down">Thumbs Down Count: </label>
                <input type='number' name="Thumbs down" value={thmbDwn} className="txtbar" onChange={i => setThmbDwn(i.target.value)}/><br></br>
                <label htmlFor="Comment">Comment: </label>
                <input type='text' name="Comment" value={comment} className="txtbar" onChange={i => setComment(i.target.value)}/><br></br>
                <label htmlFor="Post">Parent Post: </label>
                <select name="Post" className="txtbar" defaultValue={curComnt.Parent_Post_PostID} onChange={i => setParentPost(i.target.value)}>
                    <PostOptions posts={posts}/>
                </select><br></br>
                <label htmlFor="Reply">Replying to: </label>
                <select name="Reply" className="txtbar" defaultValue={curComnt.Parent_Comment_CommentID} onChange={i => setParentCmnt(i.target.value)}>
                    <option value={null}>NULL</option>
                    <CmntOptions cmts={cmts}/>
                </select><br></br>
                <button onClick={() => updateCmnt()}>Save</button>
            </fieldset>
        </div>
    );
}

export default EditComment;