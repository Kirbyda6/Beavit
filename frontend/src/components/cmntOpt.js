import React from "react";

function CmntOpt({ cmt }) {
    return(
        <option value={cmt.CommentID}>{cmt.CommentStr}</option>
    );
}

export default CmntOpt;