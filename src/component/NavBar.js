import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

import img1 from './images/a1.png'
export default function NavBar() {
  const auth = useAuth()

  return (
    <nav className='header-nav'>
        <img src={img1} className='img1' alt=""/>
        
      <NavLink to ="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/service">Services</NavLink>
      <NavLink to="/booking">Book Now</NavLink>
      <NavLink to ="/cart">View MemberShip</NavLink>
      {!auth.user && <NavLink to = "/login">Login</NavLink>}
   
   
      
    
    </nav>
  )
}
