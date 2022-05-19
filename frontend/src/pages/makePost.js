import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserOptions from "../components/userOptions";
import CommOptions from "../components/commOptions";

function MakePost({ reren, setRerender, users, comms }) {
    const navigate = useNavigate()

    const [poster, setPoster] = useState('')
    const [title, setTitle] = useState('')
    const [comm, setComm] = useState('')

    const createPost = async () => {
        await fetch('http://flip2.engr.oregonstate.edu:7352/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                poster: poster,
                title: title,
                community: comm
            })
        })
        .then(() => {setRerender(!reren)})
        .then(() => {navigate('/posts')})
    }

    return(
        <div>
            <Link to='/posts'>Cancel</Link>
            <fieldset>
                <legend>Make Post</legend>
                <label htmlFor="Poster">Poster: </label>
                <select className="txtbar" name="Poster" onChange={i => setPoster(i.target.value)}>
                    <option value={null}>--Please pick a User--</option>
                    <UserOptions users={users}/>
                </select><br></br>
                <label htmlFor="Title">Title: </label>
                <input type='text' value={title} onChange={i => setTitle(i.target.value)} name="Title" className="txtbar"/><br></br>
                <label htmlFor="Community">Community: </label>
                <select className="txtbar" name="Community" onChange={i => setComm(i.target.value)}>
                    <option value={null}>--Please pick a Community--</option>
                    <CommOptions comms={comms}/>
                </select><br></br>
                <button onClick={() => createPost()}>Post</button>
            </fieldset>
        </div>
    );
}

export default MakePost;