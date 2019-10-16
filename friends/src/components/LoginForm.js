import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';


const LoginForm = props => {

 const [input, setInput] = useState({username: '', password: ''})

 const handleChange = event => {
     setInput({
    ...input,
    [event.target.name]: event.target.value
     })
 }

 const login = event => {
     event.preventDefault();

 axiosWithAuth()
 .post(`/api/login`, input)
 .then(res => {
     localStorage.setItem('token', res.data.payload);
     props.history.push('/private')
 })
   .catch(err => console.log(err.reponse))
 };
 
 if (localStorage.getItem('token')) {
    return <Redirect to='private' />
}

//  if(!input) {
//  return <div>Loading...</div>
//  }

 return (

  <form onSubmit={login}>
  
  <input 
  type= 'text'
  value={input.username}
  name='username'
  placeholder='...enter username'
  onChange={handleChange}
  />

  <input 
  type='password'
  value={input.password}
  name='password'
  placeholder='...enter password'
  onChange={handleChange}
  />
  <button>Log In</button>
  </form>   
 )
}
export default LoginForm