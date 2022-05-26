import React from "react";
import CommUsrRow from "./commUserRow";

function CommUsrComp ({ commUsrs, reren, setRerender, usrs, comms }) {
    if (commUsrs.length === 0) {
        return(
            <tr>
                <td colSpan={3} style={{textAlign:"center"}}>Empty</td>
            </tr>
        );
    } else {
        return(
            commUsrs.map((x, i) => <CommUsrRow commUsr={x}  reren={reren} setRerender={setRerender} usrs={usrs} comms={comms} key={i}/>)
        );
    }
}

export default CommUsrComp;
