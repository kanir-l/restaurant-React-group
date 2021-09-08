import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BookingModel } from '../models/BookingModel'
//import InputGuests from '../components/reservations/InputGuests'
import InputDate from '../components/reservations/InputDate'
import TimeSlots from '../components/reservations/TimeSlots'
import ContactDetails from '../components/reservations/ContactDetails'

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
        })
        .catch(error => {
            console.log(error)
        })

        setShowDefaultTime(false)
    }

    const defaultTime = (defaultTime: number) => {
        if (showDefaultTime === true) {
            return (
            <div>
            { defaultTime === 18 ? 
                <div className ="timeSlot">
                <input type="radio" id="time1" name="time" value="18.00" checked={defaultTime === 18}></input>
                <label htmlFor="time1">18:00</label>
                </div> 
            :
                <div className ="timeSlot">
                <input type="radio" id="time2" name="time" value="21.00" checked={defaultTime === 21}></input>
                <label htmlFor="time2">21:00</label> 
                </div> 
            }
            </div> )
        } else {
            return (
            <div>
                <TimeSlots timeSlots={updatedTimeInput} availability={availability}></TimeSlots> 
            </div> )
        }
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
                        <b>ID:</b> 
                        <p onClick={() => goToBooking(booking._id)}>{booking._id}</p>
                        {booking._id === editId ? 
                            <div>
                                <b>NO: OF GUESTS</b> 
                                <input type="number" value = {updatedBooking.numberOfGuests} onChange={updatedGuestsInput} name="numberOfGuests" id="numberOfGuests" min="1" max="90" /> <br></br>

                                <b>BOOKING Date:</b>
                                <p>{updatedBooking.date}</p>
                                <button onClick={showCalendar}>Calendar</button>
                                { calendar ? <InputDate inputDate={updatedDateInput}></InputDate> : null } <br></br>
                            
                                <button onClick={sendingGuestsAndDate}>Continue</button> <br></br>
                    
                                <b>BOOKING TIME:</b> 
                                {defaultTime(booking.time)}
           
                                {<ContactDetails contactDetails={updatedContacts} defaultValues={booking} submitRedirectUrl="/admin"></ContactDetails>}
                            </div> 
                        :
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
                        }
                    </div>
            
                    <div className="edit-delete">
                        <button onClick={() => updateBooking(booking._id, booking.numberOfGuests, booking.date, booking.time, booking.phone, booking.email, booking.firstName, booking.lastName, booking.specialRequest)}>Edit</button>
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
