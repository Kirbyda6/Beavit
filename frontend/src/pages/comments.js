import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineEditNote, MdDeleteForever } from "react-icons/md";
import { HiOutlineUserRemove } from "react-icons/hi";

function Comments() {
    const navigate = useNavigate()
    return(
        <div>
            <span className="nav-bar">
                <h1 id='beavit' onClick={() => navigate('/')}>Beavit</h1>
                <Link to='/users'> Users </Link>
                <Link to='/posts'> Posts </Link>
                <Link to='/comments' id="current-page"> Comments </Link>
                <Link to='/communities'> Communities </Link>
                <Link to='/communityUsers'> Community Users </Link>
            </span>
            <div className="content">
                <table>
                    <thead>
                        <tr>
                            <th>Made By</th>
                            <th>Date Made</th>
                            <th>Thumbs Up</th>
                            <th>Thumbs Down</th>
                            <th>Comment</th>
                            <th>Parent Post</th>
                            <th>Parent Comment</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Billy</td>
                            <td>2021-11-07 00:00:00</td>
                            <td>20</td>
                            <td>3</td>
                            <td>I think you should take CS 271!</td>
                            <td>What class should I take next quarter?</td>
                            <td>NULL</td>
                            <td><MdOutlineEditNote id="icon" onClick={() => navigate('/editComment')}/></td>
                            <td><MdDeleteForever id="icon"/></td>
                            <td className="tooltip">
                                <HiOutlineUserRemove id="icon"/>
                                <span className="tooltext">Set Parent Comment To NULL</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Bob</td>
                            <td>2021-11-08 00:00:00</td>
                            <td>42</td>
                            <td>2</td>
                            <td>Yes! I thought it was a lot better than the last Marvel movie.</td>
                            <td>Should I see the latest Marvel Movie?</td>
                            <td>NULL</td>
                            <td><MdOutlineEditNote id="icon" onClick={() => navigate('/editComment')}/></td>
                            <td><MdDeleteForever id="icon"/></td>
                            <td className="tooltip">
                                <HiOutlineUserRemove id="icon"/>
                                <span className="tooltext">Set Parent Comment To NULL</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Jill</td>
                            <td>2021-11-09 00:00:00</td>
                            <td>16</td>
                            <td>1</td>
                            <td>I really liked CS 361 and recommend it for Winter quarter.</td>
                            <td>What class should I take next quarter?</td>
                            <td>NULL</td>
                            <td><MdOutlineEditNote id="icon" onClick={() => navigate('/editComment')}/></td>
                            <td><MdDeleteForever id="icon"/></td>
                            <td className="tooltip">
                                <HiOutlineUserRemove id="icon"/>
                                <span className="tooltext">Set Parent Comment To NULL</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Jane</td>
                            <td>2021-11-10 00:00:00</td>
                            <td>34</td>
                            <td>2</td>
                            <td>Me too! I'm looking forward to the sequal.</td>
                            <td>Should I see the latest Marvel Movie?</td>
                            <td>Yes! I thought it was a lot better than the last Marvel movie.</td>
                            <td><MdOutlineEditNote id="icon" onClick={() => navigate('/editComment')}/></td>
                            <td><MdDeleteForever id="icon"/></td>
                            <td className="tooltip">
                                <HiOutlineUserRemove id="icon"/>
                                <span className="tooltext">Set Parent Comment To NULL</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Billy</td>
                            <td>2021-11-11 00:00:00</td>
                            <td>10</td>
                            <td>1</td>
                            <td>So cute! Looks just like mine!</td>
                            <td>Check out my cute dog!</td>
                            <td>NULL</td>
                            <td><MdOutlineEditNote id="icon" onClick={() => navigate('/editComment')}/></td>
                            <td><MdDeleteForever id="icon"/></td>
                            <td className="tooltip">
                                <HiOutlineUserRemove id="icon"/>
                                <span className="tooltext">Set Parent Comment To NULL</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={() => navigate('/newComment')}>New Comment</button>
            </div>
        </div>
    );
}

export default Comments;