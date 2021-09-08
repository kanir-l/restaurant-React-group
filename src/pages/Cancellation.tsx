import axios from 'axios';

function Cancellation() {

    const pathArray = window.location.pathname.split('/');
    let extractedURL = pathArray[3];

    const deleteReservation = (extractedURL: string) => {
        const deleteUrl = ("http://localhost:8080/reservations/delete/" + extractedURL);
        axios.delete(deleteUrl)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="confirmation-container">
            <h2>Cancellation</h2>
            <p>Do you wish to cancel your reservation?</p>
            <button onClick={() => deleteReservation(extractedURL)}>Cancel reservation</button>
        </div>
    )
}

export default Cancellation
