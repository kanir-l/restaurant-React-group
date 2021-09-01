import { ChangeEvent, useState } from "react";

interface ITimeSlotsProps {
    timeSlots(time: number): void;
}

function TimeSlots(props: ITimeSlotsProps) {

    const slot1Available = props.slot1Available;
    const slot2Available = props.slot2Available;

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
    
    const renderSorryMessage = () => {
        if (!slot1Available && !slot2Available) {
            return (
                <div className = "sorry-box">
                <h3>We’re sorry!</h3>
                <p>We don’t have any tables available on that date.</p>
                <p>Please choose another date.</p>
                </div>
            )
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
            <h4>Available times</h4>
            {renderSlot1()}
            {renderSlot2()}
            </form>
            <p style={{visibility: "hidden"}}>{time}</p>
            {renderSorryMessage()}
        </div>
    );
}

export default TimeSlots;