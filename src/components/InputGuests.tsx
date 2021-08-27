import React, { useState } from "react";

function InputGuests() {
    const [inputValue, setInputValue] = useState(0);

    const increment = () => {
        setInputValue(prevInputValue => prevInputValue + 1);
    }

    const decrement = () => {
        setInputValue(prevInputValue => prevInputValue - 1);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(parseInt(e.target.value));
    }

    return (
        <div>
            <button disabled={false} onClick={decrement}>Decrement</button>
            <input 
                type="number"
                value={inputValue}
                onChange={handleChange}
                name="numberOfGuests" 
                id="numberOfGuests" 
                />
            {/* <input type="number" name="numberOfGuests" id="numberOfGuests" value={inputValue}></input> */}
            {/* <div>{inputValue}</div> */}
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default InputGuests;