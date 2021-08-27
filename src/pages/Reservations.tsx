import 'react-calendar/dist/Calendar.css';
import Button from '../components/Button';
import ContactDetails from '../components/ContactDetails';
import InputDate from '../components/InputDate';
import InputGuests from '../components/InputGuests';
import TimeSlots from '../components/TimeSlots';

function Reservations() {

    return (
        <div className="reservations-container">
            <h2>Reservations</h2>
            <InputGuests></InputGuests>
            <InputDate></InputDate>
            <Button content="Continue"></Button>
            <TimeSlots></TimeSlots>
            <ContactDetails></ContactDetails>
        </div>
    )
}

export default Reservations
