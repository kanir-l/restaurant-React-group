import ContactDetails from '../components/reservations/ContactDetails';
import InputDate from '../components/reservations/InputDate';
import InputGuests from '../components/reservations/InputGuests';
import TimeSlots from '../components/reservations/TimeSlots';
import { BookingModel } from '../models/BookingModel';
import { useState } from 'react';
import axios from 'axios';

// interface ISlotProps {
//     sendingTimeSlots(slot: boolean): void;
  
// }

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

    function sendingGuestsAndDate(props: ISlotProps) {
        
        const eightteenUrl = "/reservations/checkingEightteen"
        const twentyoneUrl = "/reservations/checkingTwentyone"
        
        
        // 18:00
        axios.post(eightteenUrl, {
            requestedNoOfGuests: reservation.numberOfGuests,
            requestedDate: reservation.date
        })
        .then(response => {
            console.log(response)
            props.sendingTimeSlots(response.data)
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
            console.log(response)
            props.sendingTimeSlots(response.data)
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
            <TimeSlots timeSlots={addTime}></TimeSlots>
            <ContactDetails contactDetails={addContacts}></ContactDetails>
        </div>
    )
}

export default Reservations
