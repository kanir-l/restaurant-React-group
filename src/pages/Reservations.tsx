import ContactDetails from '../components/reservations/ContactDetails';
import InputDate from '../components/reservations/InputDate';
import InputGuests from '../components/reservations/InputGuests';
import TimeSlots from '../components/reservations/TimeSlots';
import { BookingModel } from '../models/BookingModel';
import { useState } from 'react';
import axios from 'axios';

function Reservations() {
    const [reservation, setReservation] = useState<BookingModel>({
            _id: 0,
            id: 0,
            numberOfGuests: 0,
            date: new Date(),
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
        let res = new BookingModel(reservation._id, reservation.id, reservation.numberOfGuests, dateInput, reservation.time, reservation.firstName, reservation.lastName, reservation.phone, reservation.email, reservation.specialRequest);
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
         console.log(reservation);   
    }

    // const addReservation = (
    //     numberOfGuests: number, 
    //     date: Date, 
    //     time: number, 
    //     firstName: string, 
    //     lastName: string, 
    //     phone: string, 
    //     email: string, 
    //     specialRequest: string) => {

    //     let res = new BookingModel(0, 0, numberOfGuests, date, time, firstName, lastName, phone, email, specialRequest)
    //     setReservation(res);
    //     console.log(reservation);
    // }

    function sendingGuestsAndDate() {
        const eightteenUrl = "http://localhost:8080/reservations/checkingEightteen"
        const twentyoneUrl = "http://localhost:8080/reservations/checkingTwentyone"
        // 18:00
        axios.post(eightteenUrl, {
            requestedNoOfGuests: reservation.numberOfGuests,
            requestedDate: reservation.date
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        console.log("run")

        // 21:00
        axios.post(twentyoneUrl, {
            requestedNoOfGuests: reservation.numberOfGuests,
            requestedDate: reservation.date
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        console.log("run")
    }

    return (
        <div className="reservations-container">
            <h2>Reservations</h2>
            <InputGuests inputGuests={addGuests}></InputGuests>
            <InputDate inputDate={addDate}></InputDate>
            <button onClick={sendingGuestsAndDate}>Continue</button>
            <TimeSlots timeSlots={addTime}></TimeSlots>
            <ContactDetails contactDetails={addContacts}></ContactDetails>
        </div>
    )
}

export default Reservations
