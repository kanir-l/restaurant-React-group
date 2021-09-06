import React, { useState, ChangeEvent, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BookingModel } from "../../models/BookingModel";

interface IContactDetailsProps {
    contactDetails(
        firstName: string, 
        lastName: string, 
        phone: string, 
        email: string, 
        specialRequest: string): void;

    defaultValues?: BookingModel;
    submitRedirectUrl: string;
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

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const defaultValues = props.defaultValues
    useEffect(() => {
        if(defaultValues) {
            setContacts(defaultValues)
        }
      }, [defaultValues])

    const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name;
        setContacts({...contacts, [name]: e.target.value});
    }

    const saveContacts = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        if(contacts.firstName && contacts.lastName && contacts.phone && contacts.email) {
            setValid(true);
            props.contactDetails(contacts.firstName, contacts.lastName, contacts.phone, contacts.email, contacts.specialRequest);
            history.push("/reservations/confirmation") 
        } 
    }

    let history = useHistory();

    return (
        <>
        <h4>Your contact details</h4>
        <form onSubmit={saveContacts}>
            <input 
                type="text" 
                value={contacts.firstName} 
                onChange={handleInputs}
                name="firstName"
                placeholder="First Name" />
            {submitted && !contacts.firstName ? <span>Please enter a first name.</span> : null}
            <input 
                type="text" 
                value={contacts.lastName}
                onChange={handleInputs}
                name="lastName"
                placeholder="Last Name" />
            {submitted && !contacts.lastName ? <span>Please enter a last name.</span> : null}
            <input 
                type="text" 
                value={contacts.phone}
                onChange={handleInputs}
                name="phone"
                placeholder="Phone number" />
            {submitted && !contacts.phone ? <span>Please enter a phone number</span> : null}
            <input 
                type="email" 
                value={contacts.email}
                onChange={handleInputs}
                name="email"
                placeholder="Email address" />
                {submitted && !contacts.email ? <span>Please enter an email address.</span> : null}
            <input
                type="text" 
                value={contacts.specialRequest} 
                onChange={handleInputs}
                name="specialRequest"
                placeholder="Message..." />
            {submitted && valid ? <div >Your reservation have been sent!</div> : null}
            <Link to={props.submitRedirectUrl}><button type="submit" onClick={saveContacts}>Confirm reservation</button></Link>
        </form>
        </>
    );
}

export default ContactDetails;