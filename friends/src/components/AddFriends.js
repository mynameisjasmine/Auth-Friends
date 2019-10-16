import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';



const AddFriends = props => {
const [input, setInput] = useState({name: '', age: '', email: ''})

 const handleChange = event => {
     setInput({
    ...input,
    [event.target.name]: event.target.value
     })
 }

 const addFriend = event => {
     event.preventDefault()
     
     axiosWithAuth()
     .post(`/api/friends`, input)
     .then(res => {
     console.log(res.data)
     props.setFriends(res.data)
     })
     .catch(err => console.log(err.response))
 }
    return (
    <form onSubmit={addFriend}>
   <input
     type="text"
     name="name"
     value={input.name}
     placeholder="...add name"
     onChange={handleChange}
   />
   <input
    type="number"
    name="age"
    value={input.age}
    placeholder="...add age"
    onChange={handleChange}
   />
   <input
    type="email"
    name="email"
    value={input.email}
    placeholder="...add email"
    onChange={handleChange}
   />
   <button type="submit">Add</button>
    </form>
    )
}
export default AddFriends;