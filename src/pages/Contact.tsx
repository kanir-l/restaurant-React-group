import React from 'react'

function Contact() {
    return (
        <div className="contact-container">
            <img className="contact-img" src="images/contacts-photo.jpg" alt="Tables in court yard"></img>
            <div className="contact">
                <h2>Contact us</h2>
                <h3>L'Isola</h3>
                <p><span>Address</span>Stengatan 15, 11470 Stockholm</p>
                <p><span>Phone</span>0861-234-567</p>
                <p><span>Email</span>contact@lisola.se</p>
                <iframe className="map" title="L'Isola" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18320.50979544667!2d18.04597275151801!3d59.325141997444355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e3b15240f1%3A0x3b7dbd7b35c0a57f!2sGamla%20Stan!5e0!3m2!1sen!2sse!4v1629895730343!5m2!1sen!2sse" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Contact
