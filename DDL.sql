SET FOREIGN_KEY_CHECKS = 0;
SET AUTOCOMMIT = 0;

CREATE OR REPLACE TABLE Users (
    UserID INT NOT NULL AUTO_INCREMENT,
    Username VARCHAR(20) NOT NULL,
    JoinDate DATE NOT NULL,
    ThumbsUpCt INT NOT NULL,
    ThumbsDwnCt INT NOT NULL,
    PRIMARY KEY (UserID)
);

CREATE OR REPLACE TABLE Communities (
    CommunityID INT NOT NULL AUTO_INCREMENT,
    CommunityName VARCHAR(20) NOT NULL,
    MemberCt INT NOT NULL,
    PRIMARY KEY (CommunityID)
);

CREATE OR REPLACE TABLE Community_User_Base (
    Users_UserID INT NOT NULL,
    Communities_CommunityID INT NOT NULL,
    ModeratorStatus BOOLEAN NOT NULL DEFAULT False,
    PRIMARY KEY (Users_UserID, Communities_CommunityID),
    FOREIGN KEY (Users_UserID) REFERENCES Users(UserID) ON DELETE CASCADE,
    FOREIGN KEY (Communities_CommunityID) REFERENCES Communities(CommunityID)
);

CREATE OR REPLACE TABLE Posts (
    PostID INT NOT NULL AUTO_INCREMENT,
    OP_UserID INT NOT NULL,
    PostTitle VARCHAR(280) NOT NULL,
    ThumbsUpCt INT NOT NULL,
    ThumbsDwnCt INT NOT NULL,
    DatePosted DATETIME NOT NULL,
    Communities_CommunityID INT NOT NULL,
    PRIMARY KEY (PostID),
    FOREIGN KEY (OP_UserID) REFERENCES Users(UserID) ON DELETE CASCADE,
    FOREIGN KEY (Communities_CommunityID) REFERENCES Communities(CommunityID)
);

CREATE OR REPLACE TABLE Comments (
    CommentID INT NOT NULL AUTO_INCREMENT,
    ThumbsUpCt INT NOT NULL,
    ThumbsDwnCt INT NOT NULL,
    DateMade DATETIME NOT NULL,
    CommentStr TEXT NOT NULL,
    Commenter_UserID INT NOT NULL,
    Parent_Post_PostID INT NOT NULL,
    Parent_Comment_CommentID INT,
    PRIMARY KEY (CommentID),
    FOREIGN KEY (Commenter_UserID) REFERENCES Users(UserID) ON DELETE CASCADE,
    FOREIGN KEY (Parent_Post_PostID) REFERENCES Posts(PostID),
    FOREIGN KEY (Parent_Comment_CommentID) REFERENCES Comments(CommentID)
);

INSERT INTO Users (UserID, Username, JoinDate, ThumbsUpCt, ThumbsDwnCt) VALUES
(11, 'Billy', '2017-6-15', 853, 25),
(22, 'Bob', '2015-9-1', 1013, 16),
(33, 'Jill', '2020-8-17', 215, 8),
(44, 'Jane', '2018-6-21', 912, 9);

INSERT INTO Communities (CommunityID, CommunityName, MemberCt) VALUES
(111, 'OSU', 159),
(222, 'Pets', 20000),
(333, 'Movies', 50000);

INSERT INTO Community_User_Base (Users_UserID, Communities_CommunityID, ModeratorStatus) VALUES
((SELECT UserID FROM Users WHERE Username='Billy'), (SELECT CommunityID FROM Communities WHERE CommunityName='OSU'), False),
((SELECT UserID FROM Users WHERE Username='Billy'), (SELECT CommunityID FROM Communities WHERE CommunityName='Pets'), True),
((SELECT UserID FROM Users WHERE Username='Bob'), (SELECT CommunityID FROM Communities WHERE CommunityName='OSU'), False),
((SELECT UserID FROM Users WHERE Username='Bob'), (SELECT CommunityID FROM Communities WHERE CommunityName='Pets'), True),
((SELECT UserID FROM Users WHERE Username='Bob'), (SELECT CommunityID FROM Communities WHERE CommunityName='Movies'), False),
((SELECT UserID FROM Users WHERE Username='Jill'), (SELECT CommunityID FROM Communities WHERE CommunityName='OSU'), False),
((SELECT UserID FROM Users WHERE Username='Jane'), (SELECT CommunityID FROM Communities WHERE CommunityName='Movies'), False);

INSERT INTO Posts (PostID, OP_UserID, PostTitle, ThumbsUpCt, ThumbsDwnCt, DatePosted, Communities_CommunityID) VALUES
(1111, (SELECT UserID FROM Users WHERE Username='Bob'), "What class should I take next quarter?", 80, 1, '2021-11-7', (SELECT CommunityID FROM Communities WHERE CommunityName='OSU')),
(2222, (SELECT UserID FROM Users WHERE Username='Billy'), "Check out my cute dog!", 102, 2, '2021-11-7', (SELECT CommunityID FROM Communities WHERE CommunityName='Pets')),
(3333, (SELECT UserID FROM Users WHERE Username='Jane'), "Should I see the latest Marvel movie?", 94, 2, '2021-11-7', (SELECT CommunityID FROM Communities WHERE CommunityName='Movies'));

INSERT INTO Comments (CommentID, ThumbsUpCt, ThumbsDwnCt, DateMade, CommentStr, Commenter_UserID, Parent_Post_PostID, Parent_Comment_CommentID) VALUES
(
    1,
    20,
    3,
    '2021-11-7',
    "I think you should take CS 271!",
    (SELECT UserID FROM Users WHERE Username='Billy'),
    (SELECT PostID FROM Posts WHERE PostTitle='What class should I take next quarter?'),
    NULL
),
(
    2,
    42,
    2,
    '2021-11-8',
    "Yes! I thought it was a lot better than the last Marvel movie.",
    (SELECT UserID FROM Users WHERE Username='Bob'),
    (SELECT PostID FROM Posts WHERE PostTitle='Should I see the latest Marvel movie?'),
    NULL
),
(
    3,
    16,
    1,
    '2021-11-9',
    "I really liked CS 361 and recommend it for Winter quarter.",
    (SELECT UserID FROM Users WHERE Username='Jill'),
    (SELECT PostID FROM Posts WHERE PostTitle='What class should I take next quarter?'),
    NULL
),
(
    4,
    34,
    2,
    '2021-11-10',
    "Me too! I'm looking forward to the sequel.",
    (SELECT UserID FROM Users WHERE Username='Jane'),
    (SELECT PostID FROM Posts WHERE PostTitle='Should I see the latest Marvel movie?'),
    (SELECT CommentID FROM Comments A WHERE CommentStr="Yes! I thought it was a lot better than the last Marvel movie.")
),
(
    5,
    10,
    1,
    '2021-11-11',
    "So cute! Looks just like mine!",
    (SELECT UserID FROM Users WHERE Username='Billy'),
    (SELECT PostID FROM Posts WHERE PostTitle='Check out my cute dog!'),
    NULL
);

SET FOREIGN_KEY_CHECKS = 1;
COMMIT;