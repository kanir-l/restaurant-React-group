import ContactDetails from '../components/reservations/ContactDetails';
import InputDate from '../components/reservations/InputDate';
import InputGuests from '../components/reservations/InputGuests';
import TimeSlots from '../components/reservations/TimeSlots';
import { BookingModel } from '../models/BookingModel';
import {  useState } from 'react';
import axios from 'axios';



function Reservations() {
    const [reservation, setReservation] = useState<BookingModel>({
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
    });

    const addGuests = (guestsInput: number) => {
        let res = new BookingModel(reservation._id, reservation.id, guestsInput, reservation.date, reservation.time, reservation.firstName, reservation.lastName, reservation.phone, reservation.email, reservation.specialRequest);
        setReservation(res);
    }
    
    const addDate = (dateInput: Date) => {
        const dateInputToString = dateInput.toString().substring(0, 16)
        let res = new BookingModel(reservation._id, reservation.id, reservation.numberOfGuests, dateInputToString, reservation.time, reservation.firstName, reservation.lastName, reservation.phone, reservation.email, reservation.specialRequest);
        setReservation(res);
    }

    const addTime = (time: number) => {
        let res = new BookingModel(reservation._id, reservation.id, reservation.numberOfGuests, reservation.date, time, reservation.firstName, reservation.lastName, reservation.phone, reservation.email, reservation.specialRequest);
        setReservation(res);
    }

    const addContacts = (
        firstName: string, 
        lastName: string, 
        phone: string, 
        email: string, 
        specialRequest: string) => {
            
        let res = new BookingModel(reservation._id, reservation.id, reservation.numberOfGuests, reservation.date, reservation.time, firstName, lastName, phone, email, specialRequest);
        setReservation(res);

        // Backend
        const comfirmationBookingUrl = "/reservations/confirmation"
        axios.post(comfirmationBookingUrl, {
            newBooking: res
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error)
        })
        console.log(res)
    }


    // State for the TimeSlots 18:00, 21:00
    const [slot1, setSlot1] = useState(false);
    const [slot2, setSlot2] = useState(false);

    function sendingGuestsAndDate() {
        const eightteenUrl = "/reservations/checkingEightteen"
        const twentyoneUrl = "/reservations/checkingTwentyone"
        
        // 18:00
        axios.post(eightteenUrl, {
            requestedNoOfGuests: reservation.numberOfGuests,
            requestedDate: reservation.date
        })
        .then(response => {
            console.log(response);
            setSlot1(response.data);
        })
        .catch(error => {
            console.log(error)
        })

        // 21:00
        axios.post(twentyoneUrl, {
            requestedNoOfGuests: reservation.numberOfGuests,
            requestedDate: reservation.date
        })
        .then(response => {
            console.log(response);
            setSlot2(response.data);
        })
        .catch(error => {
            console.log(error)
        })  
    }

    return (
        <div className="reservations-container">
            <h2>Reservations</h2>
            <InputGuests inputGuests={addGuests}></InputGuests>
            <InputDate inputDate={addDate}></InputDate>
            <button onClick={sendingGuestsAndDate}>Continue</button>
            <TimeSlots timeSlots={addTime} slot1Bookable={slot1} slot2Bookable={slot2}></TimeSlots>
            {(reservation.time === 0) ? null : <ContactDetails contactDetails={addContacts}></ContactDetails>}
        </div>
    )
}

export default Reservations
