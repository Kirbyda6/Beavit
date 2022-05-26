import React from "react";
import { useNavigate, Link } from "react-router-dom";
import CommUsrComp from "../components/commUsrComp";

function CommunityUsers({ commUsrs, reren, setRerender, usrs, comms }) {
    const navigate = useNavigate()

    return(
        <div>
            <span className="nav-bar">
                <h1 id='beavit' onClick={() => navigate('/')}>Beavit</h1>
                <Link to='/users'> Users </Link>
                <Link to='/posts'> Posts </Link>
                <Link to='/comments'> Comments </Link>
                <Link to='/communities'> Communities </Link>
                <Link to='/communityUsers' id="current-page"> Community Users </Link>
            </span>
            <div className="content">
                <table>
                    <thead><tr><th>User</th><th>Community</th><th>Moderator Status</th></tr></thead>
                    <tbody>
                        <CommUsrComp commUsrs={commUsrs} reren={reren} setRerender={setRerender} usrs={usrs} comms={comms}/>
                    </tbody>
                </table>
                <button onClick={() => navigate('/addComUsr')}>Add A User To A Community</button>
            </div>
            
        </div>
    );
}

export default CommunityUsers;