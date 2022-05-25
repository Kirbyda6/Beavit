import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CommComponent from "../components/commComp";

function Communities({ comms, reren, setRerender }) {
    const navigate = useNavigate();
    return(
        <div>
            <span className="nav-bar">
                <h1 id='beavit' onClick={() => navigate('/')}>Beavit</h1>
                <Link to='/users'> Users </Link>
                <Link to='/posts'> Posts </Link>
                <Link to='/comments'> Comments </Link>
                <Link to='/communities' id="current-page"> Communities </Link>
                <Link to='/communityUsers'> Community Users </Link>
            </span>
            <div className="content">
                <table>
                    <thead><tr><th>Community Name</th><th>Member Count</th></tr></thead>
                    <tbody>
                        <CommComponent comms={comms} reren={reren} setRerender={setRerender}/>
                    </tbody>
                </table>
                <button onClick={() => navigate('/addComm')}>Add A Community</button>
            </div>
            
        </div>
    );
}

export default Communities;