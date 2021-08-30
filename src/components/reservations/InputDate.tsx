import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface IInputDateProps {
    inputDate(date: Date): void;
}

function InputDate(props: IInputDateProps) {
    const [date, setDate] = useState(new Date()); ///// Something's wrong here, i think new Date() is wrong, it sets the state to today's date, not the one clicked.

    const saveDate = () => {
        setDate(date);
        //Anropa Reservations page och ge den det valda datumet
        props.inputDate(date);
    }
    
    return (
        <div>
            <h4>Pick a Date</h4>
            <Calendar prev2Label={null} next2Label={null} minDetail="year" onChange={saveDate} value={date}></Calendar>
        </div>
    )
}

export default InputDate;