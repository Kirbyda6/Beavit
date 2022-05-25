import React from "react";

function PostOpt({ post }) {
    return(
        <option value={post.PostID}>{post.PostTitle}</option>
    );
}

export default PostOpt;