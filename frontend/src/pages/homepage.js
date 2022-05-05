import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
    return(
        <div>
            <Link to='/users'> Users </Link><br></br>
            <Link to='/posts'> Posts </Link><br></br>
            <Link to='/communities'> Communities </Link><br></br>
            <Link to='/comments'> Comments </Link><br></br>
            <Link to='/communityUsers'> Community Users </Link><br></br>
        </div>
    );
}

export default Homepage;