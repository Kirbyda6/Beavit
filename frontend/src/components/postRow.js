import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineEditNote, MdDeleteForever } from "react-icons/md";

function PostRow ({ post, setCurPost, reren, setRerender }) {
    const navigate = useNavigate()

    const deletePost = async (id) => {
        const url = `http://flip3.engr.oregonstate.edu:8057/posts/${id}`
        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(setRerender(!reren))
    }

    const editPost = async () => {
        setCurPost(post)
        navigate('/editPost')
    }

    return(
        <tr>
            <td>{post.OP_UserID}</td>
            <td>{post.PostTitle}</td>
            <td>{post.ThumbsUpCt}</td>
            <td>{post.ThumbsDwnCt}</td>
            <td>{post.DatePosted}</td>
            <td>{post.Communities_CommunityID}</td>
            <td><MdOutlineEditNote id="icon" onClick={() => editPost()}/></td>
            <td><MdDeleteForever id="icon" onClick={() => deletePost(post.PostID)}/></td>
        </tr>
    );
}

export default PostRow;
