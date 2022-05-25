import React from "react";
import CommentRow from "./commentRow";

function CommentComp ({ comments, setCurComnt, reren, setRerender }) {
    if (comments.length === 0) {
        return(
            <tr>
                <td colSpan={8} style={{textAlign:"center"}}>Empty</td>
            </tr>
        );
    } else {
        return(
            comments.map((x, i) => <CommentRow comment={x} setCurComnt={setCurComnt}  reren={reren} setRerender={setRerender} key={i}/>)
        );
    }
}

export default CommentComp;
