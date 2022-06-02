import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineEditNote, MdDeleteForever } from "react-icons/md";
import { HiOutlineUserRemove } from "react-icons/hi";

function CommentRow ({ comment, setCurComnt, reren, setRerender, users, posts }) {
    const navigate = useNavigate()
    const date = new Date(comment.DateMade);
    const opts = { year:"numeric", month:"short", day:"numeric"}

    const [username, setUsername] = useState()
    const [post, setPost] = useState()

    fetch(`http://flip2.engr.oregonstate.edu:7352/usrSearch/${comment.Commenter_UserID}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {return res.json()})
    .then(result => {setUsername(result[0].Username)})

    fetch(`http://flip2.engr.oregonstate.edu:7352/postSearch/${comment.Parent_Post_PostID}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {return res.json()})
    .then(result => {setPost(result[0].PostTitle)})

    const deleteComnt = async (id) => {
        const url = `http://flip2.engr.oregonstate.edu:7352/comments/${id}`
        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(setRerender(!reren))
        return
    }

    const editComnt = async () => {
        setCurComnt(comment);
        navigate('/editComment');
    }

    const setNull = async () => {
        await fetch('http://flip2.engr.oregonstate.edu:7352/comments', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cmtID: comment.CommentID,
                user: comment.Commenter_UserID,
                date: comment.DateMade,
                thmbsUp: comment.ThumbsUpCt,
                ThmbsDwn: comment.ThumbsDwnCt,
                comment: comment.CommentStr,
                parentPost: comment.Parent_Post_PostID,
                parentCmnt: null
            })
        })
        .then(() => {setRerender(!reren)})
    }

    return(
        <tr>
            <td>{comment.CommentID}</td>
            <td>{username}</td>
            <td>{date.toLocaleDateString('en-us', opts)}</td>
            <td>{comment.ThumbsUpCt}</td>
            <td>{comment.ThumbsDwnCt}</td>
            <td>{comment.CommentStr}</td>
            <td>{post}</td>
            <td>{comment.Parent_Comment_CommentID}</td>
            <td style={{backgroundColor: "#030303"}}>
                <div className="tooltip">
                    <MdOutlineEditNote id="icon" onClick={() => editComnt()}/>
                    <span className="tooltext">Edit Comment</span>
                </div>
                <div className="tooltip">
                    <MdDeleteForever id="icon" onClick={() => deleteComnt(comment.CommentID)}/>
                    <span className="tooltext">Delete Comment</span>
                </div>
                <div className="tooltip">
                    <HiOutlineUserRemove id="icon" onClick={() => setNull()}/>
                    <span className="tooltext">Set Parent Comment To NULL</span>
                </div>
            </td>
        </tr>
    );
}

export default CommentRow;
