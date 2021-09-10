import { useState, ChangeEvent, useEffect, FormEvent } from "react";
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
    const [checkbox, setCheckbox] = useState(false);

    const defaultValues = props.defaultValues
    useEffect(() => {
        if(defaultValues) {
            setContacts(defaultValues)
        }
      }, [defaultValues]);

    const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name;
        setContacts({...contacts, [name]: e.target.value});
    }

    const handleCheckbox = () => {
        let booleanVariable = false;
        if (booleanVariable === false) {
            booleanVariable = true;
        } else {
            booleanVariable = false;
        }
        setCheckbox(booleanVariable);
    }

    const saveContacts = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        if(contacts.firstName && contacts.lastName && contacts.phone && contacts.email && (checkbox === true)) {
            setValid(true);
            props.contactDetails(contacts.firstName, contacts.lastName, contacts.phone, contacts.email, contacts.specialRequest);
            const submitRedirectUrl = props.submitRedirectUrl
            history.push(submitRedirectUrl) 
        } 
    }

    let history = useHistory();

    return (
        <div className="contact-details-container">
        <h4>Your contact details</h4>
        <form onSubmit={saveContacts}>
            {submitted && !contacts.firstName ? <span className="required">Please enter a first name.</span> : null}
            <input 
                type="text" 
                value={contacts.firstName} 
                onChange={handleInputs}
                name="firstName"
                placeholder="First Name" />
            {submitted && !contacts.lastName ? <span className="required">Please enter a last name.</span> : null}
            <input 
                type="text" 
                value={contacts.lastName}
                onChange={handleInputs}
                name="lastName"
                placeholder="Last Name" />
            {submitted && !contacts.phone ? <span className="required">Please enter a phone number</span> : null}
            <input 
                type="text" 
                value={contacts.phone}
                onChange={handleInputs}
                name="phone"
                placeholder="Phone number" />
            {submitted && !contacts.email ? <span className="required">Please enter an email address.</span> : null}
            <input 
                type="email" 
                value={contacts.email}
                onChange={handleInputs}
                name="email"
                placeholder="Email address" />
                
            <input
                className="request-input"
                type="text" 
                value={contacts.specialRequest} 
                onChange={handleInputs}
                name="specialRequest"
                placeholder="Message..." />

            <div className="gdpr-container">
                <input type="checkbox" id="gdprCheckbox" name="gdprCheckbox" onChange={handleCheckbox}/>
                <label htmlFor="gdprCheckbox">
                    <div>
                        By making a reservation I understand and consent to the information provided by me will be saved by L'Isola.
                        For more information click the link:
                        <a href="https://www.imy.se/verksamhet/dataskydd/det-har-galler-enligt-gdpr/">Terms and conditions.</a>
                    </div>
                </label>
                {(checkbox === false) ? <span className="required">You need to consent to the terms and conditions.</span> : null}
            </div>

           
            <button type="submit" className="confirm-btn" onClick={saveContacts}>Confirm reservation</button>

        </form>
        </div>
    );
}

export default ContactDetails;