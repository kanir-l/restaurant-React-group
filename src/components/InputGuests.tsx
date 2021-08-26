import React, { useState } from "react";

function InputGuests() {
    const [inputValue, setInputValue] = useState(0);

    const increment = () => {
        setInputValue(inputValue + 1);
    }

    // let reachedZero = false;
    // if (inputValue >= 0) {
    //         reachedZero = true;
    //     }
        
    const decrement = () => {
        setInputValue(inputValue - 1);
    }

    return (
        <div>
            <button /*{disabled={reachedZero}*/ onClick={decrement}>Decrement</button>
            <input type="number" name="numberOfGuests" id="numberOfGuests" value={inputValue}></input>
            {/* <div>{inputValue}</div> */}
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default InputGuests;