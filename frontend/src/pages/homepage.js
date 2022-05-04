import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
    return(
        <div>
            <Link to='/users'> Users </Link>
            <Link to='/posts'> Posts </Link>
            <Link to='/communities'> Communities </Link>
            <Link to='/comments'> Comments </Link>
            <Link to='/communityUsers'> Community Users </Link>
        </div>
    );
}

export default Homepage;