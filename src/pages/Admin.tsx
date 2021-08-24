import React, { useEffect, useState } from 'react'
//import Axios from 'axios'
import { BookingModel } from '../models/BookingModel'

function Admin() {
    const [bookings, setBookings] = useState<BookingModel[]>([])
   
    const printDatas = bookings.map(booking => {
        return(
            <React.Fragment key={booking.id}>
                <p>ID: {booking.id}</p>
                <p>GUEST: {booking.guest}</p>  
                <p>DATE: {booking.date}</p>
                <p>TIME: {booking.time}</p>
                <p>NAME: {booking.name}</p>
                <p>PHONE: {booking.phone}</p>
                <p>EMAIL: {booking.email}</p>
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
            <div>{printDatas}</div>
        </div>
    )
}

export default Admin
