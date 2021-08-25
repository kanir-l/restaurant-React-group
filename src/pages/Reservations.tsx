import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Button from '../components/Button';

function Reservations() {
    const [date, onChange] = useState(new Date());

    return (
        <div className="reservations-container">
            <h2>Reservations</h2>
            <label htmlFor="numberOfGuests">Number of Guests</label>
            <button onClick={() => {console.log("Minus clicked!")}}>Minus</button>
            <input type="number" name="numberOfGuests" id="numberOfGuests"></input>
            <button onClick={() => {console.log("Plus clicked!")}}>Plus</button>
            <Calendar prev2Label={null} next2Label={null} minDetail="year" onChange={onChange} value={date}></Calendar>
            {console.log(date)}
            <Button content="Continue" />
            <h4>Please select a time</h4>
            <Button content="18:00" />
            <Button content="21:00" />
        </div>
    )
}

export default Reservations
