import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Homepage() {
    const navigate = useNavigate();
    return(
        <div>
            <span className="nav-bar">
                <h1 id='beavit' onClick={() => navigate('/')}>Beavit</h1>
                <Link to='/users'> Users </Link>
                <Link to='/posts'> Posts </Link>
                <Link to='/comments'> Comments </Link>
                <Link to='/communities'> Communities </Link>
                <Link to='/communityUsers'> Community Users </Link>
            </span>
            <p>
                Beavit is a social media web application that supports 40 million active users to help
                them connect to communities of other users that share the same interests. A user can
                have many different interests and may not know anyone that shares the same interests
                in their day-to-day life. This is why a user may want to join one of the 100,000 Beavit
                Communities or create one themselves. Users can make posts, ‘ThumbsUp’ or
                ‘ThumbsDown’ a post/comment, as well as comment on posts/comments within that
                post. A detailed and well-structured database is crucial to the success of each of these
                actions and this project aims to implement one to track the activity that is occurring on 
                Beavit without directly affecting the discussion board itself.
            </p>
        </div>
    );
}

export default Homepage;
