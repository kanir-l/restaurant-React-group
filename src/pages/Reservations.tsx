import React, { useState } from 'react';
import { BookingModel } from '../models/BookingModel'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Button from '../components/Button';
import ContactDetails from '../components/ContactDetails';
import InputGuests from '../components/InputGuests';
import TimeSlots from '../components/TimeSlots';

function Reservations() {
    const [date, setDate] = useState(new Date());

    return (
        <div className="reservations-container">
            <h2>Reservations</h2>

            <label htmlFor="numberOfGuests">Number of Guests</label>
            <InputGuests></InputGuests>

            {/* <button onClick={() => {console.log("Minus clicked!")}}>Minus</button>
            <input type="number" name="numberOfGuests" id="numberOfGuests"></input>
            <button onClick={() => {console.log("Plus clicked!")}}>Plus</button> */}

            <h4>Pick a Date</h4>
            <Calendar prev2Label={null} next2Label={null} minDetail="year" onChange={setDate} value={date}></Calendar>
            {console.log(date)}

            <Button content="Continue" />

            <TimeSlots />

            <ContactDetails />
        </div>
    )
}

export default Reservations
