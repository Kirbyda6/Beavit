import React from "react";
import CommRow from "./commRow";

function CommComponent ({ comms, reren, setRerender }) {
    if (comms.length === 0) {
        return(
            <tr>
                <td colSpan={2} style={{textAlign:"center"}}>Empty</td>
            </tr>
        );
    } else {
        return(
            comms.map((x, i) => <CommRow comm={x} reren={reren} setRerender={setRerender} key={i}/>)
        );
    }
}

export default CommComponent;
