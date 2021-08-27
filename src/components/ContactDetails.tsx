import React, { useState } from "react";

function ContactDetails() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleFirstNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, firstName: event.target.value});
    };

    const handleLastNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, lastName: event.target.value});
    };

    const handlePhoneInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, phone: event.target.value});
    };

    const handleEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, email: event.target.value});
    };

    const handleMessageInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValues({...values, message: event.target.value});
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if(values.firstName && values.lastName && values.phone && values.email) {
            setValid(true);
        }
        setSubmitted(true);
    }

    return (
        <form onSubmit={handleSubmit}>
            {submitted && !values.firstName ? <span>Please enter a first name.</span> : null}
            <input 
                type="text" 
                value={values.firstName} 
                onChange={handleFirstNameInputChange}
                placeholder="First Name" />
            {submitted && !values.lastName ? <span>Please enter a last name.</span> : null}
            <input 
                type="text" 
                value={values.lastName}
                onChange={handleLastNameInputChange}
                placeholder="Last Name" />
            {submitted && !values.phone ? <span>Please enter a phone number</span> : null}
            <input 
                type="text" 
                value={values.phone}
                onChange={handlePhoneInputChange}
                placeholder="Phone number" />
            {submitted && !values.email ? <span>Please enter an email address.</span> : null}
            <input 
                type="email" 
                value={values.email}
                onChange={handleEmailInputChange}
                placeholder="Email address" />
            <textarea 
                value={values.message} 
                onChange={handleMessageInputChange}
                placeholder="Message..." />
            {submitted && valid ? <div >Your reservation have been sent!</div> : null}
            <button type="submit">Confirm Reservation</button>
        </form>
    );
}

export default ContactDetails;