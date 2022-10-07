import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = ({ friend }) => {
    const { id, name, email, username } = friend;
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            {/* dynamic path make: start */}
            <p><small>userName: <Link to={`/friend/${id}`}>{username}</Link></small></p>
            {/* dynamic path make: end */}
        </div>
    );
};

export default Friend;