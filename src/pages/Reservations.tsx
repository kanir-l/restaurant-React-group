import ContactDetails from '../components/reservations/ContactDetails';
import InputDate from '../components/reservations/InputDate';
import InputGuests from '../components/reservations/InputGuests';
import TimeSlots from '../components/reservations/TimeSlots';
import { BookingModel } from '../models/BookingModel';
import {  useState } from 'react';
import axios from 'axios';
import { Summary } from '../components/reservations/Summary';



function Reservations() {

    const defaultState = {
        _id: 0,
        id: 0,
        numberOfGuests: 0,
        date: "",
        time: 0,
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        specialRequest: ""
    };
    
    const [reservation, setReservation] = useState<BookingModel>(defaultState);

    const addGuests = (guestsInput: number) => {
        let res = new BookingModel(reservation._id, reservation.id, guestsInput, reservation.date, reservation.time, reservation.firstName, reservation.lastName, reservation.phone, reservation.email, reservation.specialRequest);
        setReservation(res);
    }
    
    const addDate = (dateInput: Date) => {
        const dateInputToString = dateInput.toString().substring(0, 16)
        let res = new BookingModel(reservation._id, reservation.id, reservation.numberOfGuests, dateInputToString, reservation.time, reservation.firstName, reservation.lastName, reservation.phone, reservation.email, reservation.specialRequest);
        setReservation(res);
    }

    const addTime = (time: number) => {
        let res = new BookingModel(reservation._id, reservation.id, reservation.numberOfGuests, reservation.date, time, reservation.firstName, reservation.lastName, reservation.phone, reservation.email, reservation.specialRequest);
        setReservation(res);
    }

    const addContacts = (
        firstName: string, 
        lastName: string, 
        phone: string, 
        email: string, 
        specialRequest: string) => {
            
        let res = new BookingModel(reservation._id, reservation.id, reservation.numberOfGuests, reservation.date, reservation.time, firstName, lastName, phone, email, specialRequest);
        setReservation(res);

        // Backend
        const comfirmationBookingUrl = "/reservations/confirmation"
        axios.post(comfirmationBookingUrl, {
            newBooking: res
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error)
        })
        console.log(res)
    }
    
    // State for response
    const [responseReceived, setResponseReceived] = useState(false);


    interface IAvailability {
        slot1: boolean;
        slot2: boolean;
    }

    // State for availability (content of response)
    const [availability, setAvailability] = useState<IAvailability>({
        slot1: false,
        slot2: false
    });

    function sendingGuestsAndDate() {

        axios.get("/reservations/checkingAvailability", {
            params: {
                numberOfGuests: reservation.numberOfGuests,
                date: reservation.date
            }
        })

        .then(response => {
            console.log(response.data);
            setAvailability({slot1: response.data.slot1Availability, slot2: response.data.slot2Availability});

            setResponseReceived(true);
        })
        .catch(error => {
            console.log(error)
        })
    }

    const resetValues = () => {
        setReservation(defaultState);
        setResponseReceived(false);
    }


    return (
        <div className="reservations-container">
            <h2>Reservations</h2>
            {(responseReceived === true) ? null : <div>
            <InputGuests inputGuests={addGuests}></InputGuests>
            <InputDate inputDate={addDate}></InputDate>
            {(reservation.date === "") ? <button disabled={true}>Continue</button> : <button onClick={sendingGuestsAndDate}>Continue</button>}
            </div>}
                
            {(responseReceived === true) ? <div>
            <button onClick={resetValues}>Go back</button>
            <TimeSlots timeSlots={addTime} availability={availability}></TimeSlots>
            </div> : null}
            {(reservation.time === 0) ? null : <div>
            <Summary inputSummary={reservation}></Summary>
            <ContactDetails contactDetails={addContacts} submitRedirectUrl="/reservations/confirmation"></ContactDetails>Confirmation
            
            </div>}
        </div>
    )
}

export default Reservations
