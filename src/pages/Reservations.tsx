import React from 'react'
import Button from '../components/Button'

function Reservations() {
    return (
        <div className="reservations-container">
            <h2>Reservations</h2>
            <label htmlFor="numberOfGuests">Number of Guests</label>
            <button onClick={() => {console.log("Minus clicked!")}}>Minus</button>
            <input type="number" name="numberOfGuests" id="numberOfGuests"></input>
            <button onClick={() => {console.log("Plus clicked!")}}>Plus</button>
            <Button content="Continue" />
            <h4>Please select a time</h4>
            <Button content="18:00" />
            <Button content="21:00" />
        </div>
    )
}

export default Reservations
