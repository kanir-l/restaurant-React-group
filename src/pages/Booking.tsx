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
        <>
            <div>
                <b>NO: OF GUESTS</b> 
                <p>{booking.numberOfGuests}</p> <br></br>
                <b>BOOKING Date:</b> 
                <p>{booking.date}</p> <br></br>
                <b>BOOKING TIME:</b> 
                <p>{booking.time}</p> <br></br>
                <b>FIRSTNAME:</b> 
                <p>{booking.firstName}</p><br></br>
                <b>LASTNAME:</b>
                <p>{booking.lastName}</p> <br></br>
                <b>PHONE NO:</b> 
                <p>{booking.phone}</p> <br></br>
                <b>EMAIL:</b> 
                <p>{booking.email}</p><br></br>
                <b>SPEICAL REQUEST:</b> 
                <p>{booking.specialRequest}</p>  
            </div>
            <div className="edit-delete">
                <button onClick={() => deleteBooking(booking._id)}>Delete</button>
            </div>
    </>
    )
}

export default Booking
