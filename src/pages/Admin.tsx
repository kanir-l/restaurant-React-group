import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BookingModel } from '../models/BookingModel'

function Admin() {
    const [bookings, setBookings] = useState<BookingModel[]>([])

    // * Fetch the bookings from the DB with /admin * //
    useEffect(() => {
        axios.get('/admin')
        .then(res => {
            const allBookingsFromDB = res.data;
            setBookings(allBookingsFromDB);
        })
        .catch (error => {
            console.log(error)
        })
    }, [])

    const deleteBooking = (bookingId: number) => {
        const adminDeleteUrl = ("/admin/delete/" + bookingId)
 
        axios.delete(adminDeleteUrl)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error)
        })
    }

    // * All bookings HTML form *//
    const printAllBookings = bookings.map(booking => {
        return(
            <React.Fragment key={booking._id}>
            <div className="booking-container">
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
                        <button onClick={() => deleteBooking(booking._id)}>Delete</button>
                    </div>
                </div>
            </div>  
            </React.Fragment>
        )
    })
  
    return (
        <div className="admin-container">
            <b>All Bookings</b>
            {printAllBookings}
        </div>
    )
}

export default Admin
