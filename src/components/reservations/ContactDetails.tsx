import React, { useState, ChangeEvent } from "react";

interface IContactDetailsProps {
    contactDetails(
        firstName: string, 
        lastName: string, 
        phone: string, 
        email: string, 
        specialRequest: string): void;
}

interface IContacts {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    specialRequest: string;
}

function ContactDetails(props: IContactDetailsProps) {

    const [contacts, setContacts] = useState<IContacts>({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        specialRequest: ""
    });

    const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name;
        setContacts({...contacts, [name]: e.target.value});
        props.contactDetails(contacts.firstName, contacts.lastName, contacts.phone, contacts.email, contacts.specialRequest);
    }

    const saveContacts = () => {
        //Anropa Reservations page och ge den det valda datumet
        props.contactDetails(contacts.firstName, contacts.lastName, contacts.phone, contacts.email, contacts.specialRequest);  
    }

        ////////// Lovisas validation ///////////
        const [submitted, setSubmitted] = useState(false);
        const [valid, setValid] = useState(false);
    
        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            if(contacts.firstName && contacts.lastName && contacts.phone && contacts.email) {
                setValid(true);
            }
            setSubmitted(true);
        }
        /////////////

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
                value={contacts.specialRequest} 
                onChange={handleInputs}
                name="specialRequest"
                placeholder="Message..." />
            {submitted && valid ? <div >Your reservation have been sent!</div> : null}
            <button type="submit" onClick={saveContacts}>Confirm reservation</button>
        </form>
    );
}

export default ContactDetails;