import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({ post }) => {
    const { id, title, body } = post;
    // react-router hook useNavigate to set link path  (way 3)
    const navigate = useNavigate();
    // arrow function to set dynamic link
    const handleNavigate = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <p>{title}</p>
            <p><small>{body}</small></p>
            {/* dynamic path make:way 1 start */}
            <Link to={`/post/${id}`}>visit: {id}</Link>
            {/* dynamic path make:way 1 end */}

            {/* dynamic path make:way 2 start */}
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            {/* dynamic path make:way 2 end */}

            {/* dynamic path make:way 3 start */}
            {/* function call to set link path */}
            <button onClick={handleNavigate}>Show Details2</button>
            {/* dynamic path make:way 3 end */}
        </div>
    );
};

export default Post;