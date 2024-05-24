import React, { useState } from 'react'
import image1 from 'C:/Users/KEERTHANA/Desktop/fitness-trail/frontend/src/images/best.jpg'
import axios from 'axios'
import { useAuth } from './Auth'
export default function Booking() {
  const auth=useAuth()
    const[email,setEmail]=useState("")
    const[contact,setContact]=useState("")
    const[events,setEvents]=useState("")
    const[eventDate,setEventDate]=useState("")
    const[eventPlace,setEventPlace]=useState("")
    const handleSubmit = (e)=>{
      e.preventDefault()
        axios.post('http://localhost:3001/booking/post',{
          name:auth.name,email,contact,events,eventDate,eventPlace
        })
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
        alert("your are joined our team")
       
      }
  return (
    <div id="book"style={{ backgroundImage:`url(${image1})` }}>
     <div id="form-box">
       <form id="form-id" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br><br></br>
        <label>Contact:</label>
        <input type="number"value={contact} onChange={(e)=>setContact(e.target.value)}></input><br></br><br></br>
        <label>MemberShip:</label>
        <select value={events} onChange={(e)=>setEvents(e.target.value)}>
            <option value="select">Select MemberShip</option>
            <option value="marraige">Premium MemberShip</option>
            <option value="birthday">Year Once MemberShip</option>
            <option value="social">Pro MemberShip</option>
           
           
        </select><br></br><br></br>
        <label>Joining Date:</label>
        <input type="date" value={eventDate} onChange={(e)=>setEventDate(e.target.value)}></input><br></br><br></br>
        <label> Place:</label>
        <textarea value={eventPlace} onChange={(e)=>setEventPlace(e.target.value)}></textarea><br></br><br></br>
        <button type="submit">Book Now</button>
       
       </form>
       </div>
    </div>
    
  )
}
