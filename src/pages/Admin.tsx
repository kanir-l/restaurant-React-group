import React, { useEffect, useState } from 'react'
//import Axios from 'axios'
import { BookingModel } from '../models/BookingModel'

function Admin() {
    const [bookings, setBookings] = useState<BookingModel[]>([])
   
    const printAllBookings = bookings.map(booking => {
        return(
            <React.Fragment>
            <div className="booking-container "key={booking._id} >
                <div className = "booking-box">
                    <div className = "booking">
                        <b>ID:</b> 
                        <p>{booking._id}</p>
                            <br></br>
                        <b>NO.OF GUESTS:</b> 
                        <p>{booking.numberOfGuests}</p> 
                            <br></br> 
                        <b>BOOKING Date:</b> 
                        <p>{booking.date}</p>
                            <br></br>
                        <b>BOOKING TIME:</b> 
                        <p>{booking.time}</p>
                            <br></br>
                        <b>FIRSTNAME:</b> 
                        <p>{booking.firstName}</p>
                            <br></br>
                        <b>LASTNAME:</b> 
                        <p>{booking.lastName}</p>
                            <br></br>
                        <b>PHONE NO:</b> 
                        <p>{booking.phone}</p>
                            <br></br>
                        <b>EMAIL:</b> 
                        <p>{booking.email}</p>
                            <br></br>
                        <b>SPEICAL REQUEST:</b> 
                        <p>{booking.specialRequest}</p>
                            <br></br>
                    </div>
                    <div className="edit-delete">
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>  
            </React.Fragment>
        )
    })

    useEffect(() => {
        fetch('/admin')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setBookings(data)
            console.log(data)
        })
    }, [])
    
    return (
        <div className="admin-container">
            <b className="b-bookings">All Bookings</b>
            {printAllBookings}
        </div>
    )
}

export default Admin
