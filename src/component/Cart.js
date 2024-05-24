import axios from 'axios'
import React, { useEffect, useState } from 'react'
import image1 from 'C:/Users/KEERTHANA/Desktop/fitness-trail/frontend/src/images/best.jpg'
import { useAuth } from './Auth'

export default function Cart() {
    const [bookedList, setBookedList] = useState([])
    const [userdetails, setUserdetails] = useState([])
    const auth = useAuth()

    useEffect(() => {
        axios.get('http://localhost:3001/booking/get')
            .then(res => setBookedList(res.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const cartList = bookedList.filter(x => x.name === auth.user)
        setUserdetails(cartList)
    }, [bookedList, auth.user])

    return (
        <div id="book"style={{ backgroundImage:`url(${image1})` }}>
            <div className='form-cart'>

           
            <h3 className="animate-charcter"> Welcome {auth.user}</h3>
                <div className='content'><h2>Your Booking Details</h2>
                <h2>Your Booking Details</h2>
                </div><br></br><br></br>
            {userdetails.map((item, index) => (
                <div key={index}>
                    <div className='box-cart'>
                    <p>Name: {item.name}</p>
                    <p>Contact: {item.contact}</p>
                    <p>Booking Mail Id: {item.email}</p>
                    <p>Booked Events: {item.events}</p>
                    <p>Event Place: {item.eventPlace}</p>
                    <p>Event Date: {item.eventDate}</p>
                    </div>
                    {/* Add other details you want to display */}
                </div>
            ))}<br></br>
               <h1 className="animate-charcter">Thank You</h1>
            </div>
          
        </div>
    )
}
