import React from 'react'
import { useState } from 'react'
function Form({password,username,setPassword,setUsername}) 
{
   
    const handleUsernameChange=(event)=>{
    console.log(event.target.value);
    setUsername(event.target.value);
    }
    const handlepasswordChange=(event)=>{
        console.log(event.target.value);
        setPassword(event.target.value);
        }
  return (
    <div>
        <div></div>
        <form >
      <label htmlFor="username">Username</label>
      
      <input onChange={handleUsernameChange}type="text" id='username' />
      <label htmlFor="password">Password</label>
      <input onChange={handlepasswordChange}type="text" id='password' />
      
      <button type='submit'>Submit</button>
      </form>
      <div>{username}</div>
      <div>{password}</div>
    </div>
  )
}

export default Form
