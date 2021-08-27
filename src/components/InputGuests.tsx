import React, { useState } from "react";

function InputGuests() {
    const [inputValue, setInputValue] = useState(0);

    const increment = () => {
        setInputValue(prevInputValue => prevInputValue + 1);
    }

    const decrement = () => {
        setInputValue(prevInputValue => prevInputValue - 1);
    }

    return (
        <div>
            <button disabled={false} onClick={decrement}>Decrement</button>
            <input type="number" name="numberOfGuests" id="numberOfGuests" value={inputValue}></input>
            {/* <div>{inputValue}</div> */}
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default InputGuests;