import { React, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import UserOptions from '../components/userOptions';
import PostOptions from '../components/postOptions';
import CmntOptions from '../components/cmntOptions';

function MakeComment({ comments, posts, users, reren, setRerender }) {
    const navigate = useNavigate()

    const [usr, setUsr] = useState(users[0].UserID)
    const [date, setDate] = useState()
    const [thmbUp, setThmbUp] = useState()
    const [thmbDwn, setThmbDwn] = useState()
    const [comment, setComment] = useState()
    const [parentPost, setParentPost] = useState(posts[0].PostID)
    const [parentCmnt, setParentCmnt] = useState(null)

    const makeCmnt = async () => {
        let min_date = new Date("2015-01-01T00:00:00").valueOf()
        let max_date = new Date("2100-01-01T00:00:00").valueOf()
        let slct = new Date(date).valueOf()

        if(thmbUp >= 0 && thmbDwn >= 0 && (comment != undefined && comment != '') && slct > min_date && slct < max_date) {
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
            alert("The fillowing requirements must be met:\n\n"
            + "1) Comment must be filled\n"
            + "2) Thumbs Up and Thumbs Down must be positive integers\n"
            + "3) Date must be between Jan. 1, 2015 and Jan. 1, 2100 with a valid time\n")

        }
    }

    return(
        <div>
            <Link to='/comments'>Cancel</Link>
            <fieldset>
                <legend>Make Comment</legend>

                <label htmlFor="Made By">Made By: </label>
                <select name="Made By" className="txtbar" onChange={i => setUsr(i.target.value)}>
                    <UserOptions users={users}/>
                </select><br></br>

                <label htmlFor="dateMade">Date Made (Required): </label>
                <input type='datetime-local' name="dateMade" min="2015-01-01T00:00"
                    max="2100-01-01T00:00" onChange={i => {setDate(i.target.value)}} className="txtbar"/><br></br>

                <label htmlFor="commentThumbsUp">Thumbs Up (Required): </label>
                <input type='number' name="commentThumbsUp" className="txtbar" onChange={i => setThmbUp(i.target.value)}/><br></br>

                <label htmlFor="commentThumbsDown">Thumbs Down (Required): </label>
                <input type='number' name="commentThumbsDown" className="txtbar" onChange={i => setThmbDwn(i.target.value)}/><br></br>

                <label htmlFor="Comment">Comment (Required): </label>
                <input type='text' name="Comment" className="txtbar" onChange={i => setComment(i.target.value)}/><br></br>

                <label htmlFor="Post">Parent Post: </label>
                <select name="Post" className="txtbar" onChange={i => setParentPost(i.target.value)}>
                    <PostOptions posts={posts}/>
                </select><br></br>

                <label htmlFor="Reply">Replying to: </label>               
                <select name="Reply" className="txtbar" defaultValue={null} onChange={i => setParentCmnt(i.target.value)}>
                    <option value={null}>NULL</option>
                    <CmntOptions cmts={comments}/>
                </select><br></br>

                <button onClick={() => makeCmnt()}>Add</button>
            </fieldset>
        </div>
    );
}

export default MakeComment;