import React, { useState } from "react";

interface IInputGuestsProps {
    inputGuests(numberOfGuests: number): void;
}

function InputGuests(props: IInputGuestsProps) {
    const [guests, setGuests] = useState(0);

    const increment = () => {
        setGuests(prevGuest => {
            const newGuest = prevGuest + 1;
            props.inputGuests(newGuest)
            return newGuest;
        })
    }

    const decrement = () => {
        setGuests(prevGuest => {
            const newGuest = prevGuest - 1;
            props.inputGuests(newGuest)
            return newGuest;
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGuests(parseInt(e.target.value))
        props.inputGuests(parseInt(e.target.value))
    }

    return (
        <div>
            {(guests === 0) ? <button disabled={true} onClick={decrement}>Decrement</button> : <button onClick={decrement} disabled={false}>Decrement</button>}
            <input 
                type="number"
                value={guests.toString()}
                onChange={handleChange}
                name="numberOfGuests" 
                id="numberOfGuests"
                min="1"
                max="90"
                />
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default InputGuests;