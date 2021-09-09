import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BookingModel } from '../models/BookingModel'
//import InputGuests from '../components/reservations/InputGuests'
import InputDate from '../components/reservations/InputDate'
import TimeSlots from '../components/reservations/TimeSlots'
import ContactDetails from '../components/reservations/ContactDetails'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Admin() {
    const [bookings, setBookings] = useState<BookingModel[]>([])

    const [updatedBooking, setUpdatedBooking] = useState<BookingModel>({
        _id: 0,
        numberOfGuests: 0,
        date: "",
        time: 0,
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        specialRequest: ""
    })
    
    useEffect(() => {
        renderBookings()
    }, [])

    const renderBookings = () => {
        axios.get("http://localhost:8080/admin")
        .then(res => {
            const allBookingsFromDB = res.data;
            setBookings(allBookingsFromDB);
        })
        .catch (error => {
            console.log(error)
        })
    }

    const deleteBooking = (bookingId: number) => {
        const adminDeleteUrl = ("http://localhost:8080/admin/delete/" + bookingId)
        axios.delete(adminDeleteUrl)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error)
        })
        renderBookings()
    }

    const [editId, setEditId] = useState<number>()

    const updateBooking = (bookingID: number, bookingGuests: number, bookingDate: string, bookingTime: number, bookingFirstname: string, bookingLastname: string, bookingPhone: string, bookingEmail: string, bookingRequest: string ) => {
        setEditId(bookingID)  
        const defaultValues = new BookingModel(bookingID, bookingGuests, bookingDate, bookingTime, bookingFirstname, bookingLastname, bookingPhone, bookingEmail, bookingRequest);
        setUpdatedBooking(defaultValues)
    }

    const updatedGuestsInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const guestCount = parseInt(e.target.value);
        let updatedRes = new BookingModel(updatedBooking._id, guestCount, updatedBooking.date, updatedBooking.time, updatedBooking.firstName, updatedBooking.lastName, updatedBooking.phone, updatedBooking.email, updatedBooking.specialRequest);
        setUpdatedBooking(updatedRes);
    }

    const updatedDateInput = (dateInput: Date) => {
        const dateInputToString = dateInput.toString().substring(0, 16)
        let updatedRes = new BookingModel(updatedBooking._id, updatedBooking.numberOfGuests, dateInputToString, updatedBooking.time, updatedBooking.firstName, updatedBooking.lastName, updatedBooking.phone, updatedBooking.email, updatedBooking.specialRequest);
        setUpdatedBooking(updatedRes);
    }

    const updatedTimeInput = (updatedTime: number) => { 
        let updatedRes = new BookingModel(updatedBooking._id, updatedBooking.numberOfGuests, updatedBooking.date, updatedTime, updatedBooking.firstName, updatedBooking.lastName, updatedBooking.phone, updatedBooking.email, updatedBooking.specialRequest);
        setUpdatedBooking(updatedRes);
    }

    const updatedContacts = (
        firstName: string, 
        lastName: string, 
        phone: string, 
        email: string, 
        specialRequest: string
        ) => {

        let updatedRes = new BookingModel(updatedBooking._id, updatedBooking.numberOfGuests, updatedBooking.date, updatedBooking.time, firstName, lastName, phone, email, specialRequest);
        setUpdatedBooking(updatedRes);

        // To Backend - PUT UPDATE request on the booking Id
        const adminUpdateUrl = ("http://localhost:8080/admin/update") 
        axios.put(adminUpdateUrl, {
            updatedRes: {...updatedRes}
        })
        .then(response => {
            console.log(response)
            setEditId(undefined)
            renderBookings()
        })
        .catch(error => {
            console.log(error)
        })  
    }

    //--//
    
    const [calendar, setCalendar] = useState<boolean>(false) 
    const showCalendar = () => {
        setCalendar(!calendar)
    }

    const [showDefaultTime, setShowDefaultTime] = useState<boolean>(true)
 
    interface IAvailability {
        slot1: boolean;
        slot2: boolean;
    }

    const [availability, setAvailability] = useState<IAvailability>({
        slot1: false,
        slot2: false
    })

    const [responseReceived, setResponseReceived] = useState(false);

    const sendingGuestsAndDate = () => {
        axios.get("/admin/checkingAvailabilityEdit", {
            params: {
                numberOfGuests: updatedBooking.numberOfGuests,
                date: updatedBooking.date,
                _id: updatedBooking._id
            }
        })
        .then(response => {
            console.log(response.data);
            setAvailability({slot1: response.data.slot1Availability, slot2: response.data.slot2Availability});
            setResponseReceived(true);
        })
        .catch(error => {
            console.log(error)
        })

        setShowDefaultTime(false)
    }

    // On click with link to specific Id booking page
    const goToBooking = (id: number) => {
        window.location.href = `http://localhost:3000/admin/${id}`
    }
  
    // * All bookings HTML form *//
    const printAllBookings = bookings.map(booking => {
        return(
            <React.Fragment key={booking._id}>
            <div className="booking-container">
                <div className = "booking-box">
                    <div className = "booking">
                         
                        <p onClick={() => goToBooking(booking._id)}><b>Id</b>{booking._id}</p>
                        {booking._id === editId ? 
                            <div>
                                <b>Guests</b> 
                                <input type="number" value = {updatedBooking.numberOfGuests} onChange={updatedGuestsInput} name="numberOfGuests" id="numberOfGuests" min="1" max="90" /> 
                                
                                
                                
                                <p><b>Date</b>{updatedBooking.date} <button onClick={showCalendar}>Pick new date and time</button></p>
                                
                                {(calendar) ? <div><InputDate inputDate={updatedDateInput}></InputDate> <button className="main-btn" onClick={sendingGuestsAndDate}>Check availability</button>  </div>: null } 
                            
                                {(responseReceived === true && calendar) ? <div><TimeSlots timeSlots={updatedTimeInput} availability={availability}></TimeSlots></div> : null}
                                
                            
                                {<ContactDetails contactDetails={updatedContacts} defaultValues={booking} submitRedirectUrl="/admin"></ContactDetails>}
                            </div> 
                        :
                            <div>
                                
                                <p><b>Guests</b>{booking.numberOfGuests}</p> 
                                 
                                <p><b>Date</b>{booking.date}</p> 
                                 
                                <p><b>Time</b>{booking.time}:00</p> 
                                
                                <p><b>First name</b>{booking.firstName}</p>
                                
                                <p><b>Last name</b>{booking.lastName}</p> 
                                
                                <p><b>Phone</b> {booking.phone}</p> 
                                 
                                <p><b>Email</b>{booking.email}</p>
                                
                                <p><b>Special request</b>{booking.specialRequest}</p>
                            </div> 
                        }
                    </div>
            
                    <div className="edit-delete">
                        <button className="edit-btn" onClick={() => updateBooking(booking._id, booking.numberOfGuests, booking.date, booking.time, booking.phone, booking.email, booking.firstName, booking.lastName, booking.specialRequest)}><FontAwesomeIcon icon={faEdit}/></button>
                        <button className="delete-btn" onClick={() => deleteBooking(booking._id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                    </div>
                </div>
            </div>  
            </React.Fragment>
        )
    })
  
    return (
        <div className="admin-container">
            <h2>All Reservations</h2>
            {printAllBookings} 
        </div>
    )
}

export default Admin
