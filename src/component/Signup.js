import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signup() {

const[name,setName]=useState('')
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const[message,setMessage]=useState('')

const navigate=useNavigate()
const handleSignUp=()=>{
if(name===''&&email===''&&password===''){
  setMessage('enter required fields')
 }else{
  axios.post('http://localhost:3001/auth/signup',{username:name,email:email,password:password})
  .then(res=>console.log(res))
  setMessage('signup successfully')
  navigate('/Login')
 }
}
  return (
    <div>
        <div className='signup-container'>
        <form onSubmit={handleSignUp}>
        <label>Name</label>
        <input type='name' value={name} onChange={(e)=>{setName(e.target.value)}}/><br></br>

        <label>Email</label>
        <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br></br>

        <label>Password</label>
        <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br></br>

        <button type='submit' className='container-button'>SignUp</button>
        </form>
        {message}
    </div>
    </div>
  )
}