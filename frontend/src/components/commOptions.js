import React from "react";
import CommOpt from "./commOpt";

function CommOptions({ comms }) {
    return(
        comms.map((x, i) => <CommOpt comm={x} key={i}/>)
    );
}

export default CommOptions;