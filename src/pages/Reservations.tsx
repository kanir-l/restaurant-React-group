import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Button from '../components/Button';
import ContactDetails from '../components/ContactDetails';
import InputDate from '../components/InputDate';
import InputGuests from '../components/InputGuests';
import TimeSlots from '../components/TimeSlots';

function Reservations() {

    return (
        <div className="reservations-container">
            <h2>Reservations</h2>
            <label htmlFor="numberOfGuests">Number of Guests</label>
            <InputGuests></InputGuests>
            <InputDate></InputDate>
            <Button content="Continue" />
            <TimeSlots />
            <ContactDetails />
        </div>
    )
}

export default Reservations
