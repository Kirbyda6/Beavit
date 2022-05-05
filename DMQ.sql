-- Group 48
-- Trenton Lewis
-- Daniel Kirby
-- Project Name: Beavit

-- Queries needed per Project Outline:
    -- Insert entries to every table/entity (5 entities for us so 5 of these)
    -- Every Table/entity should be used in at least one SELECT (5 entities for us so 5 of these)
        -- Needs to be search/filterable
    -- One DELETE for any entity for M:M
    -- One UPDATE for any entity for M:M
    -- In a 1:M relationship, you should be able to set FK to NULL and remove the relationship
---------------------------------------------------------------------------------------------------------------------------------------------

-- *** $ symbol means whatever the user of the UI inputs ***
---------------------------------------------------------------------------------------------------------------------------------------------
-- Users Queries:

    -- Create (Insert) New User
INSERT INTO Users (Username, JoinDate, ThumbsUpCt, ThumbsDwnCt)
VALUES ($Username, $JoinDate, ThumbsUpCt, $ThumbsDwnCt);
    
    -- Display all users
SELECT Username, JoinDate AS "Join Date", ThumbsUpCt AS "Thumbs Up Count", ThumbsDwnCt AS "Thumbs Down Count" FROM Users;

---------------------------------------------------------------------------------------------------------------------------------------------
-- Posts Queries:

    -- Create (Insert) New Post
INSERT INTO Posts (OP_UserID, PostTitle, ThumbsUpCt, ThumbsDwnCt, DatePosted, Communities_CommunityID)
VALUES ($OP_UserID, $PostTitle, $ThumbsUpCt, $ThumbsDwnCt, $DatePosted, $Communities_CommunityID);
    
    -- Display posts (needs to get community name via CommunityID FK from Communities Table and Username from Users Table)
SELECT Users.Username AS "Poster", Posts.PostTitle AS "Post Title", 
    Posts.ThumbsUpCt AS "Thumbs Up Count", Posts.ThumbsDwnCt AS "Thumbs Down Count", 
    Posts.DatePosted AS "Date Posted", Communities.CommunityName AS "Community" 
FROM Posts
JOIN Users ON Posts.OP_UserID = Users.UserID
JOIN Communities ON Posts.Communities_CommunityID = Communities.CommunityID;

---------------------------------------------------------------------------------------------------------------------------------------------
-- Communities Queries:

    -- Create (Insert) New Community
INSERT INTO Communities (CommunityName, MemberCt)
VALUES ($CommunityName, $MemberCt);

    -- Display all communities
SELECT CommunityName, MemberCt FROM Communities;

---------------------------------------------------------------------------------------------------------------------------------------------
-- Comments Queries:

    -- Create (Insert) New Comment
INSERT INTO Comments (CommentID, ThumbsUpCt, ThumbsDwnCt, DateMade, CommentStr, Commenter_UserID, Parent_Post_PostID, Parent_Comment_CommentID)
VALUES ($CommentID, $ThumbsUpCt, $ThumbsDwnCt, $DateMade, $CommentStr, $Commenter_UserID, $Parent_Post_PostID, $Parent_Comment_CommentID);

    -- Display Comments Page Criteria (missing how to grab parent comment )
SELECT Users.Username AS "Made By", Comments.DateMade AS "Date Made", 
    Comments.ThumbsUpCt AS "Thumbs Up Count", Comments.ThumbsDwnCt AS "Thumbs Down Count",
    Comments.CommentStr AS "Comment", Posts.PostTitle AS "Parent Post"
FROM Comments
JOIN Users ON Comments.Commenter_UserID = Users.UserID
JOIN Posts ON Comments.Parent_Post_PostID = Posts.PostID;

---------------------------------------------------------------------------------------------------------------------------------------------
-- Community_User Queries
    -- Create (Insert) New 
INSERT INTO Community_User_Base (Users_UserID, Communities_CommunityID, ModeratorStatus)
VALUES (
    (SELECT UserID FROM Users WHERE Username="$UserInputHere"), 
    (SELECT CommunityID FROM Communities WHERE CommunityName = "$UserInputHere"),
    $TrueOrFalseUserInput
)
    -- Display each user and show what communities they belong to as well as if they moderate that community

SELECT Users.Username AS "User", Communities.CommunityName AS "Community", Community_User_Base.ModeratorStatus AS "Moderator Status"
FROM Community_User_Base
JOIN Users ON Community_User_Base.Users_UserID = Users.UserID
JOIN Communities ON Communities.CommunityID = Community_User_Base.Communities_CommunityID
ORDER BY Users.Username;