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

    const addGuests = (numberOfGuests: number) => {
        setReservation({...reservation, numberOfGuests});
        console.log(reservation);
    }
    
    const addDate = (date: Date) => {
        setReservation({...reservation, date});
        console.log(reservation);
    }

    const addTime = (time: number) => {
        let r = new BookingModel(0, 0, 0, new Date(), time, "", "", "", "", "")
        setReservation(r);
        console.log(r);
    }

    const addContacts = (firstName: string, 
        lastName: string, 
        phone: string, 
        email: string, 
        specialRequest: string) => {
        
         let e = new BookingModel(0, 0, 0, new Date(), 0, firstName, lastName, phone, email, specialRequest);
         setReservation(e);
         console.log(e);   

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
