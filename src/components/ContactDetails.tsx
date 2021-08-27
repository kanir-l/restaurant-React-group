import React, { useState, ChangeEvent } from "react";


interface IContacts {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    message: string;
}

function ContactDetails() {
    const [contacts, setContacts] = useState<IContacts>({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name;
        setContacts({...contacts, [name]: e.target.value});
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(contacts.firstName && contacts.lastName && contacts.phone && contacts.email) {
            setValid(true);
        }
        setSubmitted(true);
    }

    const sendData = () => {
        console.log("Sending data: ", contacts)
    }

    return (
        <form onSubmit={handleSubmit}>
            {submitted && !contacts.firstName ? <span>Please enter a first name.</span> : null}
            <input 
                type="text" 
                value={contacts.firstName} 
                onChange={handleInputs}
                name="firstName"
                placeholder="First Name" />
            {submitted && !contacts.lastName ? <span>Please enter a last name.</span> : null}
            <input 
                type="text" 
                value={contacts.lastName}
                onChange={handleInputs}
                name="lastName"
                placeholder="Last Name" />
            {submitted && !contacts.phone ? <span>Please enter a phone number</span> : null}
            <input 
                type="text" 
                value={contacts.phone}
                onChange={handleInputs}
                name="phone"
                placeholder="Phone number" />
            {submitted && !contacts.email ? <span>Please enter an email address.</span> : null}
            <input 
                type="email" 
                value={contacts.email}
                onChange={handleInputs}
                name="email"
                placeholder="Email address" />
            <input
                type="text" 
                value={contacts.message} 
                onChange={handleInputs}
                name="message"
                placeholder="Message..." />
            {submitted && valid ? <div >Your reservation have been sent!</div> : null}
            <button type="submit" onClick={sendData}>Confirm reservation</button>
        </form>
    );
}

export default ContactDetails;