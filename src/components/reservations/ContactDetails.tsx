import React, { useState, ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { BookingModel } from "../../models/BookingModel";

interface IContactDetailsProps {
    contactDetails(
        firstName: string, 
        lastName: string, 
        phone: string, 
        email: string, 
        specialRequest: string): void;

    defaultValues?: BookingModel;
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

    const defaultValues = props.defaultValues
    useEffect(() => {
        if(defaultValues) {
            setContacts(defaultValues)
        }
      }, [defaultValues])

    /* useEffect(() => {
        const newContact = contacts;
        if(defaultValues?.firstName) {
            newContact.firstName = defaultValues?.firstName
        }
        if(defaultValues?.lastName) {
            newContact.lastName = defaultValues?.lastName
        }
        if(defaultValues?.phone) {
            newContact.phone = defaultValues?.phone
        }
        if(defaultValues?.email) {
            newContact.email = defaultValues?.email
        }
        if(defaultValues?.specialRequest) {
            newContact.specialRequest = defaultValues?.specialRequest
        }
        setContacts(newContact);
        // eslint-disable-next-line 
    }, []) */

    const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name;
        setContacts({...contacts, [name]: e.target.value});
    }

    const saveContacts = () => {
        props.contactDetails(contacts.firstName, contacts.lastName, contacts.phone, contacts.email, contacts.specialRequest);  
    }

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(contacts.firstName && contacts.lastName && contacts.phone && contacts.email) {
            setValid(true);
        }
        setSubmitted(true);
    }

    return (
        <>
        <h4>Your contact details</h4>
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
            <Link to='/reservations/confirmation'><button type="submit" onClick={saveContacts}>Confirm reservation</button></Link>
        </form>
        </>
    );
}

export default ContactDetails;