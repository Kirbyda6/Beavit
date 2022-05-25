import React from "react";
import CmntOpt from "./cmntOpt";

function CmntOptions({ cmts }) {
    return(
        cmts.map((x, i) => <CmntOpt cmt={x} key={i}/>)
    );
}

export default CmntOptions;