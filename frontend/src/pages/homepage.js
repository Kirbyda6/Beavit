import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
    return(
        <div>
            <span className="nav-bar">
                <Link to='/' id="current-page">Homepage</Link>
                <Link to='/users'> Users </Link>
                <Link to='/posts'> Posts </Link>
                <Link to='/comments'> Comments </Link>
                <Link to='/communities'> Communities </Link>
                <Link to='/communityUsers'> Community Users </Link>
            </span>
        </div>
    );
}

export default Homepage;