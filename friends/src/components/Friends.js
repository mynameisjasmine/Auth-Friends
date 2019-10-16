import React from 'react';

const Friends = props => {
    return (
    <div>
   <p>Name: {props.items.name}</p>
   <p>Age: {props.items.age}</p>
   <p>Email: {props.items.email}</p>
    </div>
    )
}
export default Friends;