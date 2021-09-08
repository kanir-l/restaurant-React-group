import { ChangeEvent, useState } from "react";

interface ITimeSlotsProps {
    timeSlots(time: number): void;
    availability: {
      slot1: boolean;
      slot2: boolean;
    };
}

function TimeSlots(props: ITimeSlotsProps) {


  const slot1Available = props.availability.slot1;
  const slot2Available = props.availability.slot2;


    const renderSorryMessage = () => {
        if (!slot1Available && !slot2Available) {
            return (
                <div className = "sorry-box">
                <h3>We’re sorry!</h3>
                <p>We don’t have any tables available on that date.</p>
                <p>Please choose another date.</p>
                </div>
            )
        } else {
          return (<h4>Please select a time</h4>)
        }
    }
    
    const [time, setTime] = useState(0);

    const saveTime = (e: ChangeEvent<HTMLInputElement>) => {
        let time = parseInt(e.target.value);
        setTime(time);
        props.timeSlots(time);
    }

    return (
        <div className="timeslot-container">
            <form>
            {renderSorryMessage()}
            {(slot1Available) ? <input type="radio" id="time1" name="time" value="18.00" onChange={saveTime}></input> : <input disabled={true} type="radio" id="time1" name="time" value="18.00"></input>}
            {(slot1Available) ? <label htmlFor="time1">18:00</label> : <label className="greyed-out" htmlFor="time1">18:00</label>}
            {(slot2Available) ? <input type="radio" id="time2" name="time" value="21.00" onChange={saveTime}></input> : <input disabled={true} type="radio" id="time2" name="time" value="21.00"></input>}
            {(slot2Available) ? <label htmlFor="time2">21:00</label> : <label className="greyed-out" htmlFor="time2">21:00</label>}
            </form>
            <p style={{visibility: "hidden"}}>{time}</p>
           
        </div>
    );
}

export default TimeSlots;