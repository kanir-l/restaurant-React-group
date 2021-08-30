import { ChangeEvent, useState } from "react";

interface ITimeSlotsProps {
    timeSlots(time: number): void;
}

interface ITimeSlot {
    time: number;
}

function TimeSlots(props: ITimeSlotsProps) {

    const [time, setTime] = useState<ITimeSlot>({
        time: 0
    });

    const saveTime = (e: ChangeEvent<HTMLInputElement>) => {
        let timeSlotValue = e.target.value;
        let parsedTimeSlotValue = parseInt(timeSlotValue);
        console.log(parsedTimeSlotValue);
        setTime({...time, time: parsedTimeSlotValue});

        props.timeSlots(time.time);
    }

    return (
        <div>
            <form action="">
            <h4>Available times</h4>

            <input type="radio" id="time1" name="time" value="18.00" onChange={saveTime}></input>
            <label htmlFor="time1">18:00</label>

            <input type="radio" id="time2" name="time" value="21.00" onChange={saveTime}></input>
            <label htmlFor="time2">21:00</label>

            </form>
        </div>
    );
}

export default TimeSlots;