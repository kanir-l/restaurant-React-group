import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface IInputDateProps {
    inputDate(date: Date): void;
}

function InputDate(props: IInputDateProps) {
    const [date, setDate] = useState(new Date())

    const saveDate = (dateValue: Date) => {
        setDate(prevDate => {
            const newDate = dateValue;
            props.inputDate(newDate)
            return newDate;
        })
    }
    
    return (
        <div className="input-date-container">
            <h4>Date</h4>
            <Calendar prev2Label={null} next2Label={null} minDetail="year" minDate={new Date()} onChange={saveDate} value={date}></Calendar>
        </div>
    )
}

export default InputDate;