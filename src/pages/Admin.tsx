import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BookingModel } from '../models/BookingModel'
import InputGuests from '../components/reservations/InputGuests'
import InputDate from '../components/reservations/InputDate'
//import TimeSlots from '../components/reservations/TimeSlots'
import ContactDetails from '../components/reservations/ContactDetails'

/* interface IBooking {
    numberOfGuests: number,
    date: string;
    time: number,
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    specialRequest: string;
} */

function Admin() {
    const [bookings, setBookings] = useState<BookingModel[]>([])
    const [updatedBooking, setUpdatedBooking] = useState<BookingModel>({
        _id: 0,
        id: 0,
        numberOfGuests: 0,
        date: "",
        time: 0,
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        specialRequest: ""
    })
    const [editId, setEditId] = useState<number>()

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

    const updatedGuests = (guestsInput: number) => {
            let updatedRes = new BookingModel(updatedBooking._id, updatedBooking.id, guestsInput, updatedBooking.date, updatedBooking.time, updatedBooking.firstName, updatedBooking.lastName, updatedBooking.phone, updatedBooking.email, updatedBooking.specialRequest);
            setUpdatedBooking(updatedRes);
    }

    const updatedDate = (dateInput: Date) => {
        const dateInputToString = dateInput.toString().substring(0, 16)
        let updatedRes = new BookingModel(updatedBooking._id, updatedBooking.id, updatedBooking.numberOfGuests, dateInputToString, updatedBooking.time, updatedBooking.firstName, updatedBooking.lastName, updatedBooking.phone, updatedBooking.email, updatedBooking.specialRequest);
        setUpdatedBooking(updatedRes);
    }

  /*   const updatedTime = (updatedTime: number) => { 
        let updatedRes = new BookingModel(updatedBooking._id, updatedBooking.id, updatedBooking.numberOfGuests, updatedBooking.date, updatedTime, updatedBooking.firstName, updatedBooking.lastName, updatedBooking.phone, updatedBooking.email, updatedBooking.specialRequest);
        setUpdatedBooking(updatedRes);
    } */

    const updatedContacts = (
        firstName: string, 
        lastName: string, 
        phone: string, 
        email: string, 
        specialRequest: string
        ) => {

        let updatedRes = new BookingModel(updatedBooking._id, updatedBooking.id, updatedBooking.numberOfGuests, updatedBooking.date, updatedBooking.time, firstName, lastName, phone, email, specialRequest);
        setUpdatedBooking(updatedRes);

        /* const adminUpdateUrl = ("/admin/update") 
            
        axios.put(adminUpdateUrl, {
            idBooking: bookingId,
      
            numberOfGuests: updatedGuests,
            date: updatedDate,
            time: updatedTime,
            firstName: updatedFirstName,
            lastName: updatedLastName,
            phone: updatedPhone,
            email: updatedEmail,
            specialRequest: updatedSpecialRequest */
        //})
        //.then(response => {
            //console.log(response);
        //})
        //.catch(error => {
            //console.log(error)
        //})  */
    }

    const updateBooking = (bookingId: number) => {
        setEditId(bookingId)  
    }

    /* const [responseReceived, setResponseReceived] = useState(false);

    interface IAvailability {
        slot1: boolean;
        slot2: boolean;
    }

   
    const [availability, setAvailability] = useState<IAvailability>({
        slot1: false,
        slot2: false
    });

    function sendingGuestsAndDate() {
       
        axios.get("/reservations/checkingAvailability", {
            params: {
                numberOfGuests: reservation.numberOfGuests,
                date: reservation.date
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
    } */

   /*  const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name;
        setUpdatedBooking({...updatedBooking, [name]: e.target.value});
    } */

    // * All bookings HTML form *//
    const printAllBookings = bookings.map(booking => {
        return(
            <React.Fragment key={booking._id}>
            <div className="booking-container">
                <div className = "booking-box">
                    <div className = "booking">
                        <b>ID:</b> 
                        <p>{booking._id}</p>
                        {booking._id === editId ? 
                        <div>
                            <InputGuests inputGuests={updatedGuests} defaultValue={booking.numberOfGuests}></InputGuests>
                            <InputDate inputDate={updatedDate} defaultValue={new Date(booking.date)}></InputDate>
                            { booking.time === 18 ? 
                                <div className ="timeSlot">
                                    <input type="radio" id="time1" name="time" value="18.00" checked={booking.time === 18}></input>
                                    <label htmlFor="time1">18:00</label>
                                </div> :
                                <div className ="timeSlot">
                                    <input type="radio" id="time2" name="time" value="21.00" checked={booking.time === 21}></input>
                                    <label htmlFor="time2">21:00</label>
                                </div>
                            }
                             {/* <TimeSlots timeSlots={updatedTime} slot1Bookable={slot1} slot2Bookable={slot2}></TimeSlots> */}
                            <ContactDetails contactDetails={updatedContacts} defaultValues={booking}></ContactDetails>
                        </div> :
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
                        <button onClick={() => updateBooking(booking._id)}>Edit</button>
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
