import React from "react";
import PostRow from "./postRow";

function PostComponent ({ posts, setCurPost, reren, setRerender, users }) {
    if (posts.length === 0) {
        return(
            <tr>
                <td colSpan={6} style={{textAlign:"center"}}>Empty</td>
            </tr>
        );
    } else {
        return(
            posts.map((x, i) => <PostRow post={x} setCurPost={setCurPost}  reren={reren} setRerender={setRerender} users={users} key={i}/>)
        );
    }
}

export default PostComponent;
