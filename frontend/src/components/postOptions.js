import React from "react";
import PostOpt from "./postOpt";

function PostOptions({ posts }) {
    return(
        posts.map((x, i) => <PostOpt post={x} key={i}/>)
    );
}

export default PostOptions;