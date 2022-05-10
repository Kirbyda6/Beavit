-- Group 48
-- Trenton Lewis
-- Daniel Kirby
-- Project Name: Beavit

-- Queries needed per Project Outline:
    -- Insert entries to every table/entity (5 entities for us so 5 of these) √
    -- Every Table/entity should be used in at least one SELECT (5 entities for us so 5 of these) √
        -- Needs to be search/filterable
    -- One DELETE for any entity for M:M √
    -- One UPDATE for any entity for M:M √
    -- In a 1:M relationship, you should be able to set FK to NULL and remove the relationship
---------------------------------------------------------------------------------------------------------------------------------------------

-- *** $ symbol means whatever the user of the UI inputs ***

---------------------------------------------------------------------------------------------------------------------------------------------
-- Users Queries:

    -- Create (Insert) New User
INSERT INTO Users (Username, JoinDate, ThumbsUpCt, ThumbsDwnCt)
VALUES ($Username, $JoinDate, ThumbsUpCt, $ThumbsDwnCt);
    
    -- Display all users
SELECT Username, JoinDate AS "Join Date", ThumbsUpCt AS "Thumbs Up", ThumbsDwnCt AS "Thumbs Down" FROM Users;

    -- Update a User (Two Parts)
        -- Get specific user's info and display it
SELECT * FROM Users WHERE Username = $UsersInputHere;
        -- Update that specific user's info
UPDATE Users SET Username = "$UsernameInput", JoinDate = "$JoinDateInput", 
    ThumbsUpCt = "$ThumbsUpInput", ThumbsDwnCt = "ThumbsDwnInput"
WHERE UserID = "$UserIDFromForm";

    -- Delete a User
DELETE FROM Users WHERE UserID = $UserSelectionFromList;

    -- Search for a User
SELECT Username AS "Username", JoinDate AS "Join Date", ThumbsUpCt AS "Thumbs Up", ThumbsDwnCt AS "Thumbs Down" 
FROM Users
WHERE Users.Username = "$UserInputHere"

---------------------------------------------------------------------------------------------------------------------------------------------
-- Posts Queries:

    -- Create (Insert) New Post
INSERT INTO Posts (OP_UserID, PostTitle, ThumbsUpCt, ThumbsDwnCt, DatePosted, Communities_CommunityID)
VALUES ($OP_UserID, $PostTitle, $ThumbsUpCt, $ThumbsDwnCt, $DatePosted, $Communities_CommunityID);
    
    -- Display posts (needs to get community name via CommunityID FK from Communities Table and Username from Users Table)
SELECT Users.Username AS "Poster", Posts.PostTitle AS "Post Title", 
    Posts.ThumbsUpCt AS "Thumbs Up", Posts.ThumbsDwnCt AS "Thumbs Down", 
    Posts.DatePosted AS "Date Posted", Communities.CommunityName AS "Community" 
FROM Posts
JOIN Users ON Posts.OP_UserID = Users.UserID
JOIN Communities ON Posts.Communities_CommunityID = Communities.CommunityID;
    
    -- Update a Post (Two Parts)
        -- Get specific post's info and display it
SELECT * FROM Posts WHERE PostID = $UserSelectionFromDropDownThatProvidesListOfPostIDs;
        -- Update that specific post's info
UPDATE Posts SET OP_UserID = "$UserIDInput", PostTitle = "$PostTitleInput",
    ThumbsUpCt = "$ThumbsUpInput", ThumbsDwnCt = "ThumbsDwnInput",
    DatePosted = "$DatetimeInput", Communities_CommunityID = "CommunityIDInput"
WHERE PostID = $UserSelectionFromDropDownThatProvidesListOfPostIDs;

    -- Delete a Post
DELETE FROM Posts WHERE PostID = $UserSelectionFromListThatProvidesUsernameAndPostTitle;

---------------------------------------------------------------------------------------------------------------------------------------------
-- Communities Queries:

    -- Create (Insert) New Community
INSERT INTO Communities (CommunityName, MemberCt)
VALUES ($CommunityName, $MemberCt);

    -- Display all communities
SELECT CommunityName, MemberCt FROM Communities;

    -- Update a Community (Two Parts)
        -- Get specific post's info and display it
SELECT * FROM Communities WHERE CommunityName = $UserSelection;
        -- Update that specific community's info
UPDATE Communities SET CommunityName = "$UsersChoice", MemberCt = "$UsersNumber"
WHERE CommunityName = $UserSelection;

    -- Delete a Community
DELETE FROM  Communities WHERE CommunityName = $UserSelectionFromList;

---------------------------------------------------------------------------------------------------------------------------------------------
-- Comments Queries:

    -- Create (Insert) New Comment
INSERT INTO Comments (CommentID, ThumbsUpCt, ThumbsDwnCt, DateMade, CommentStr, Commenter_UserID, Parent_Post_PostID, Parent_Comment_CommentID)
VALUES ($CommentID, $ThumbsUpCt, $ThumbsDwnCt, $DateMade, $CommentStr, $Commenter_UserID, $Parent_Post_PostID, $Parent_Comment_CommentID);

    -- Display Comments Page Criteria
SELECT Users.Username AS "Made By", child.DateMade AS "Date Made", 
	child.ThumbsUpCt AS "Thumbs Up", child.ThumbsDwnCt AS "Thumbs Down",
    child.CommentStr AS "Comment", Posts.PostTitle AS "Parent Post", 
    parent.CommentStr AS "Parent Comment"
FROM Comments child
LEFT JOIN Comments parent ON child.Parent_Comment_CommentID = parent.CommentID -- --> Uses Self Join to relate the CommentStr of the comment the child comment is responding to based on commentID
JOIN Users ON child.Commenter_UserID = Users.UserID
JOIN Posts ON child.Parent_Post_PostID = Posts.PostID;

    -- Update a Comment (Two Parts)
        -- Get specific comment's info and display it
SELECT * FROM Comments WHERE CommentID = $UserSelectionFromDropDownThatProvidesListOfCommentIDs;
        -- Update that specific comment's info
UPDATE Comments SET ThumbsUpCt = "$ThumbsUpInput", ThumbsDwnCt = "ThumbsDwnInput",
    DateMade = "$DatetimeInput", CommentStr = "$CommentStrInput",
    Commenter_UserID = "$UserIDInput", Parent_Post_PostID = "$UsersParentPostInput",
    Parent_Comment_CommentID = "$UsersParentCommentIDInput"
WHERE CommentID = $UserSelectionFromDropDownThatProvidesListOfCommentIDs;

    -- Set Parent Comment to Null
UPDATE Comments SET Parent_Comment_CommentID = NULL
WHERE CommentID = $UserSelectionFromButton;

    -- Delete a Comment
DELETE FROM Comments WHERE CommentID = $UserSelectionThatProvidesCommenterUsernameAndCommentStr;

---------------------------------------------------------------------------------------------------------------------------------------------
-- Community_User Queries
    -- Create (Insert) New 
INSERT INTO Community_User_Base (Users_UserID, Communities_CommunityID, ModeratorStatus)
VALUES (
    (SELECT UserID FROM Users WHERE Username="$UserInputHere"), 
    (SELECT CommunityID FROM Communities WHERE CommunityName = "$UserInputHere"),
    $TrueOrFalseUserInput
);
    -- Display each user and show what communities they belong to as well as if they moderate that community

SELECT Users.Username AS "User", Communities.CommunityName AS "Community", Community_User_Base.ModeratorStatus AS "Moderator Status"
FROM Community_User_Base
JOIN Users ON Community_User_Base.Users_UserID = Users.UserID
JOIN Communities ON Communities.CommunityID = Community_User_Base.Communities_CommunityID
ORDER BY Users.Username;

    -- Update community/user relationship
UPDATE Community_User_Base SET Users_UserID = "$UserIDOfUserSelectionFromDropdownOfUsernames", Communities_CommunityID = "$CommunityIDOfUserSelectionFromDropdownOfCommunityNames", ModeratorStatus = $TrueOrFalseUserInput

    -- Delete community/user relationship if the user unsubscribes
DELETE FROM Community_User_Base WHERE Users_UserID = "$UserIDOfUserSelectionFromDropdownOfUsernames" AND Communities_CommunityID = "$CommunityIDOfUserSelectionFromDropdownOfCommunityNames";