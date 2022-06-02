import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineEditNote, MdDeleteForever } from "react-icons/md";

function PostRow ({ post, setCurPost, reren, setRerender, users }) {
    const navigate = useNavigate()
    const date = new Date(post.DatePosted);
    const opts = { year:"numeric", month:"short", day:"numeric"}
    
    const [username, setUsername] = useState()
    const [commName, setCommName] = useState()

    fetch(`http://flip2.engr.oregonstate.edu:8048/usrSearch/${post.OP_UserID}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {return res.json()})
    .then(result => {setUsername(result[0].Username)})

    fetch(`http://flip2.engr.oregonstate.edu:8048/commSearch/${post.Communities_CommunityID}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {return res.json()})
    .then(result => {setCommName(result[0].CommunityName)})

    const deletePost = async (id) => {
        const url = `http://flip2.engr.oregonstate.edu:8048/posts/${id}`
        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(setRerender(!reren))
    }

    const editPost = async () => {
        setCurPost(post);
        navigate('/editPost');
    }

    return(
        <tr>
            <td>{username}</td>
            <td>{post.PostTitle}</td>
            <td>{post.ThumbsUpCt}</td>
            <td>{post.ThumbsDwnCt}</td>
            <td>{date.toLocaleDateString('en-us', opts)}</td>
            <td>{commName}</td>
            <td style={{backgroundColor: "#030303"}}>
                <div className="tooltip">
                    <MdOutlineEditNote id="icon" onClick={() => editPost()}/>
                    <span className="tooltext">Edit Post</span>
                </div>
                <div className="tooltip">
                    <MdDeleteForever id="icon" onClick={() => deletePost(post.PostID)}/>
                    <span className="tooltext">Delete Post</span>
                </div>
            </td>
        </tr>
    );
}

export default PostRow;