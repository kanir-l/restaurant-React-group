import Button from '../components/Button';
import ContactDetails from '../components/reservations/ContactDetails';
import InputDate from '../components/reservations/InputDate';
import InputGuests from '../components/reservations/InputGuests';
import TimeSlots from '../components/reservations/TimeSlots';
import { BookingModel } from '../models/BookingModel';
import { useState } from 'react';

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
        let res = new BookingModel(0, 0, guestsInput, reservation.date, 0, "", "", "", "", "")
        setReservation(res);
    }
    
    const addDate = (dateInput: Date) => {
        let res = new BookingModel(0, 0, reservation.numberOfGuests, dateInput, 0, "", "", "", "", "")
        setReservation(res);
    }

    const addTime = (time: number) => {
        let res = new BookingModel(0, 0, reservation.numberOfGuests, reservation.date, time, "", "", "", "", "")
        setReservation(res);
    }

    const addContacts = (
        firstName: string, 
        lastName: string, 
        phone: string, 
        email: string, 
        specialRequest: string) => {
        
         let res = new BookingModel(0, 0, reservation.numberOfGuests, reservation.date, 0, firstName, lastName, phone, email, specialRequest);
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


    return (
        <div className="reservations-container">
            <h2>Reservations</h2>
            <InputGuests inputGuests={addGuests}></InputGuests>
            <InputDate inputDate={addDate}></InputDate>
            <Button content="Continue"></Button>
            <TimeSlots timeSlots={addTime}></TimeSlots>
            <ContactDetails contactDetails={addContacts}></ContactDetails>
        </div>
    )
}

export default Reservations
