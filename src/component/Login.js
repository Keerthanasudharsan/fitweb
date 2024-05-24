import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'
import image3 from 'C:/Users/KEERTHANA/Desktop/fitness-trail/frontend/src/images/image bb.jpg'


export default function Login() {
  const[email,setEmail]=useState("")
  const[password,setpassword]=useState("")
  const[userList,setUserList]=useState([])
  const[erroemessage,setErrormessage]=useState("")
  const auth = useAuth()
  const navigate = useNavigate()

  
   
  

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/auth/signin', { email, password })
      .then(res => {
        const user = res.data; // Assuming response directly contains user data
        if (user) {
          if (user.password === password) {
            auth.login(user.name);
            navigate('/');
          } else {
            setErrormessage('Password is incorrect');
          }
        } else {
          setErrormessage('User not found');
        }
        
        // Manually submit the form
        e.target.submit();
      })
      .catch(error => {
        console.error('Error logging in:', error);
        setErrormessage('Error logging in. Please try again later.');
      });
  };
  
  
  return (
    <div id="book"style={{ backgroundImage:`url(${image3})` }}>
      <div className='content'><h2>Login Here</h2>
               
                </div>
      <div className='login-box'>
      <form onSubmit={handleLogin}>
     <label>Email:</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br><br></br>
        <label>password:</label>
        <input type="text" value={password} onChange={(e)=>setpassword(e.target.value)}/><br></br>
        <button type='submit'>Login</button>
        </form>
        </div>
        {erroemessage}
    </div>
  )
}
