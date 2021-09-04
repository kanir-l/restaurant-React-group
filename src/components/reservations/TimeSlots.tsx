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
          return (<h4>The following times are available. Please select a time</h4>)
        }
    }

    const renderSlot1 = () => {
        if (slot1Available) {
          return ( <>
          <input type="radio" id="time1" name="time" value="18.00" onChange={saveTime}></input>
          <label htmlFor="time1">18:00</label>
          </>);
        } else {
          return null;
        }
    }

    const renderSlot2 = () => {
        if (slot2Available) {
          return ( <>
            <input type="radio" id="time2" name="time" value="21.00" onChange={saveTime}></input>
            <label htmlFor="{time2}">21:00</label>
          </>);
        } else {
          return null;
        }
    }
    
    const [time, setTime] = useState(0);

    const saveTime = (e: ChangeEvent<HTMLInputElement>) => {
        let time = parseInt(e.target.value);
        setTime(time);
        props.timeSlots(time);
    }

    return (
        <div>
            <form>
            {renderSorryMessage()}
            {renderSlot1()}
            {renderSlot2()}
            </form>
            <p style={{visibility: "hidden"}}>{time}</p>
           
        </div>
    );
}

export default TimeSlots;