import React from 'react';

const Friends = props => {
    console.log('FRIENDS',props);
    return (
    <div>
   <p>Name: {props.items.name}</p>
   <p>Age: {props.items.age}</p>
   <p>Email: {props.items.email}</p>
   <button>Edit</button>
   <button onClick={() => props.deleteFriend(props.items.id)}>Delete</button>{''}
    </div>
    )
}
export default Friends;