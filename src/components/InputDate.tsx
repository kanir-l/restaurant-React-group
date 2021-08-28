import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function InputDate() {
    const [date, setDate] = useState(new Date());
    
    return (
        <div>
            <h4>Pick a Date</h4>
            <Calendar prev2Label={null} next2Label={null} minDetail="year" onChange={setDate} value={date}></Calendar>
            {console.log(date)}

        </div>
    )
}

export default InputDate;