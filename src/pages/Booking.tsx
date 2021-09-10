import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { BookingModel } from '../models/BookingModel'

 interface IParamId {
    id: string
}

const Booking= () => {
    const defaultState = {
        _id: 0,
        numberOfGuests: 0,
        date: "",
        time: 0,
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        specialRequest: ""
    };

    const [booking, setBooking] = useState<BookingModel>(defaultState)
    
    const { id } = useParams<IParamId>() 

    //Getting the booking with the specific Id from params
    useEffect(() => {
        axios.get("http://localhost:8080/admin/" + id)
        .then(res => {
            const booking = res.data
            setBooking(booking);
            console.log(booking)
        })
        .catch (error => {
            console.log(error)
        })
    }, [id])

    //Deleting the booking with the specific Id by sending with the params
    const deleteBooking = (bookingId: number) => {
        const adminDeleteUrl = ("http://localhost:8080/admin/delete/" + bookingId);
        axios.delete(adminDeleteUrl)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
        history.push("/");
    }
    let history = useHistory();

    return (
        
        <div className="cancel-booking">
            <div className="booking">
                <h2>Your reservation</h2>
            <p><b>Guests</b>{booking.numberOfGuests}</p> 
                                 
                <p><b>Date</b>{booking.date}</p> 
                                  
                <p><b>Time</b>{booking.time}:00</p> 
                                 
                <p><b>Name</b>{booking.firstName} {booking.lastName}</p>
                                 
                <p><b>Phone</b> {booking.phone}</p> 
                                  
                <p><b>Email</b>{booking.email}</p>
                                 
                <p><b>Special request</b>{booking.specialRequest}</p>
            </div>
            <div className="edit-delete">
                <button className="main-btn" onClick={() => deleteBooking(booking._id)}>Cancel reservation</button>
            </div>
            </div>
    
    )
}

export default Booking
