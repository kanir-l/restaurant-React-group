import React from 'react'

function Contact() {
    return (
        <React.Fragment>
            <div className="contact-container">
                <b>Contact us</b><br></br>
                <p>Seafood Stockholm</p><br></br>
                <p>Phone: 0-701-234-567</p><br></br>
                <p>Email: contact@seafoodstockholm.se</p><br></br>
                <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18320.50979544667!2d18.04597275151801!3d59.325141997444355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e3b15240f1%3A0x3b7dbd7b35c0a57f!2sGamla%20Stan!5e0!3m2!1sen!2sse!4v1629895730343!5m2!1sen!2sse" height="300px" width="80%" loading="lazy"></iframe>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact
