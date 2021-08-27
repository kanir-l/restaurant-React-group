import React, { useState } from "react";

function InputGuests() {
    const [inputValue, setInputValue] = useState(1);

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
            {/* <input type="number" name="numberOfGuests" id="numberOfGuests" value={inputValue}></input> */}
            {/* <div>{inputValue}</div> */}
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default InputGuests;