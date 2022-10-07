import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    //to take fetch api data ;which have been calling in app.js createBrowserRouter function
    const post = useLoaderData();
    const { id, title, body, userId } = post;
    // react-router hook useNavigate to set link path 
    const navigate = useNavigate();
    // arrow function to set dynamic link
    const handleNavigate = () => {
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h2>Details about Post: {id}</h2>
            <p>{title}</p>
            <p><small>{body}</small></p>
            {/* function call to set link path */}
            <button onClick={handleNavigate}>Get the Author</button>
        </div>
    );
};

export default PostDetails;