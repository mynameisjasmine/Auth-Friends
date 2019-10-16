import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import Friends from './Friends';
import AddFriends from './AddFriends';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const FriendsList = props => {
const [friends, setFriends] = useState([]);

useEffect(() => {
const getFriends = () => {
 axiosWithAuth()
 .get(`/api/friends`)
 .then(res => {console.log('RES',res)
 setFriends(res.data);
 })
 .catch(err => console.log(err.response))
}
 getFriends()
}, [])



    return (
    <div>
    <AddFriends setFriends={setFriends}/>
   {friends.map(items => <Friends key={items.id} items={items}/>)}
    </div>

    )
}
export default FriendsList;