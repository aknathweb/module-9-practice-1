import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    //to take fetch api data ;which have been calling in app.js createBrowserRouter function
    const friends = useLoaderData();
    console.log(friends)
    return (
        <div>
            <h2>I have so many Friends.YAY: {friends.length}</h2>
            {
                friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;