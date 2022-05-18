import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineEditNote, MdDeleteForever } from "react-icons/md";

function PostRow ({ post }) {
    const navigate = useNavigate()
    
    return(
        <tr>
            <td>{post.OP_UserID}</td>
            <td>{post.PostTitle}</td>
            <td>{post.ThumbsUpCt}</td>
            <td>{post.ThumbsDwnCt}</td>
            <td>{post.DatePosted}</td>
            <td>{post.Communities_CommunityID}</td>
            <td><MdOutlineEditNote id="icon" onClick={() => navigate('/editPost')}/></td>
            <td><MdDeleteForever id="icon"/></td>
        </tr>
    );
}

export default PostRow