import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Button from '../components/Button';
import InputGuests from '../components/InputGuests';

function Reservations() {
    const [date, setDate] = useState(new Date());

    return (
        <div className="reservations-container">
            <h2>Reservations</h2>
            <label htmlFor="numberOfGuests">Number of Guests</label>
            {/* <button onClick={() => {console.log("Minus clicked!")}}>Minus</button>
            <input type="number" name="numberOfGuests" id="numberOfGuests"></input>
            <button onClick={() => {console.log("Plus clicked!")}}>Plus</button> */}
            <h4>Pick a Date</h4>
            <Calendar prev2Label={null} next2Label={null} minDetail="year" onChange={setDate} value={date}></Calendar>
            {console.log(date)}
            <Button content="Continue" />
            <h4>Available times</h4>
            <Button content="18:00" />
            <Button content="21:00" />
            <InputGuests></InputGuests>
        </div>
    )
}

export default Reservations
