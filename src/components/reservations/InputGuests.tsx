import React, { useState } from "react";

interface IInputGuestsProps {
    inputGuests(numberOfGuests: number): void;
}

function InputGuests(props: IInputGuestsProps) {
    /////////////
    const [inputValue, setInputValue] = useState(0);

    const increment = () => {
        setInputValue(prevInputValue => prevInputValue + 1);
    }

    const decrement = () => {
        setInputValue(prevInputValue => prevInputValue - 1);
    }
    //////////////

    const [numberOfGuests, setNumberOfGuests] = useState(0);

    const saveGuests = () => {
        setNumberOfGuests(numberOfGuests);
        
        props.inputGuests(numberOfGuests);
    }

    return (
        <div>
            <label htmlFor="numberOfGuests">Number of Guests</label>
            <button disabled={false} onClick={decrement}>Decrement</button>
            <input type="number" name="numberOfGuests" id="numberOfGuests" value={inputValue} onChange={saveGuests}></input>
            {/* <div>{inputValue}</div> */}
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default InputGuests;