import React from "react";
import UserRow from "./userRow";

function UserComponentSearch ({ searchUser, reren, setRerender}) {

    // if (searchUser.length === 0) {
    //     return(
    //         <tr>
    //             <td colSpan={6} style={{textAlign:"center"}}>No Users Found</td>
    //         </tr>
    //     );
    // }
    // else {
        return(
            searchUser.map((x, i) => <UserRow 
            user={x}
            reren={reren} 
            setRerender={setRerender}
            key={i}
            />)
        );
    }
//}

export default UserComponentSearch;