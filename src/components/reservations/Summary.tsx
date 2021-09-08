interface ISummaryProps {
    inputSummary: {
        numberOfGuests: number,
        date: string,
        time: number
    }
}

export const Summary = (props: ISummaryProps) => {

    return (
        <div>
            <h4>You have chosen the following</h4>
            <p><span>Guests</span>{props.inputSummary.numberOfGuests}</p>
            <p><span>Date</span>{props.inputSummary.date}</p>
            <p><span>Time</span>{props.inputSummary.time}:00</p>
        </div>
    );
}