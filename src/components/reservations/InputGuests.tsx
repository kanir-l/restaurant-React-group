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

    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(parseInt(e.target.value));
        props.inputGuests(inputValue);
    }

    ////////////

    // const [numberOfGuests, setNumberOfGuests] = useState(0);

    // const saveGuests = () => {
    //     setNumberOfGuests(numberOfGuests);
        
    //     props.inputGuests(numberOfGuests);
    // }

    

    return (
        <div>
            {(inputValue === 1) ? <button disabled={true} onClick={decrement}>Decrement</button> : <button disabled={false} onClick={decrement}>Decrement</button>}
            <input 
                type="number"
                value={inputValue.toString()}
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