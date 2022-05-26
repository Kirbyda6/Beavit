import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineEditNote, MdDeleteForever } from "react-icons/md";
import { HiOutlineUserRemove } from "react-icons/hi";

function CommentRow ({ comment, setCurComnt, reren, setRerender }) {
    const navigate = useNavigate()
    const date = new Date(comment.DateMade);
    const opts = { year:"numeric", month:"short", day:"numeric"}

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
            <td>{comment.Commenter_UserID}</td>
            <td>{date.toLocaleDateString('en-us', opts)}</td>
            <td>{comment.ThumbsUpCt}</td>
            <td>{comment.ThumbsDwnCt}</td>
            <td>{comment.CommentStr}</td>
            <td>{comment.Parent_Post_PostID}</td>
            <td>{comment.Parent_Comment_CommentID}</td>
            <td><MdOutlineEditNote id="icon" onClick={() => editComnt()}/></td>
            <td><MdDeleteForever id="icon" onClick={() => deleteComnt(comment.CommentID)}/></td>
            <td className="tooltip">
                <HiOutlineUserRemove id="icon" onClick={() => setNull()}/>
                <span className="tooltext">Set Parent Comment To NULL</span>
            </td>
        </tr>
    );
}

export default CommentRow;
