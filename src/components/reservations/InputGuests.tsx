import React, { useEffect, useState } from "react";

interface IInputGuestsProps {
    inputGuests(numberOfGuests: number): void;
}

function InputGuests(props: IInputGuestsProps) {
    const [guests, setGuests] = useState(1)

    // If [guests] state is changed, run the props in the useEffect
    useEffect(() => {
        props.inputGuests(guests)
        // eslint-disable-next-line
    }, [guests])

    const increment = () => {
        setGuests(prevGuest => {
            const newGuest = prevGuest + 1;
            return newGuest;
        })
    }

    const decrement = () => {
        setGuests(prevGuest => {
            const newGuest = prevGuest - 1;
            return newGuest;
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGuests(parseInt(e.target.value))
        props.inputGuests(parseInt(e.target.value))
    }

    return (
        <div>
            <h4>Number of guests</h4>
            {(guests === 1) ? <button disabled={true} onClick={decrement}> - </button> : <button onClick={decrement} disabled={false}> - </button>}
            <input 
                type="number"
                value={guests.toString()}
                onChange={handleChange}
                name="numberOfGuests" 
                id="numberOfGuests"
                min="1"
                max="90"
                />
            <button onClick={increment}> + </button>
        </div>
    );
}

export default InputGuests;