import React from "react";
import { useState, useRef } from "react";
import ContactForm from "./ContactForm";


function ContactFormManager(){
    const [contactFirstName, setContactFirstName] = useState();
    const [contactLastName, setContactLastName] = useState();
    const [contactEmail, setContactEmail] = useState();
    const [contactTextArea, setcontactTextArea] = useState();
    const contactFirstNameRef = useRef();
    const contactLastNameRef = useRef();
    const contactEmailRef = useRef();
    const contactTextAreaRef = useRef();

    const contactFormSubmit = (e) => {
        e.preventDefault();
        const contactFirstName = contactFirstNameRef.current.value;
        setContactFirstName(contactFirstName);
        const contactLastName = contactLastNameRef.current.value;
        setContactLastName(contactLastName);
        const contactEmail = contactEmailRef.current.value;
        setContactEmail(contactEmail);
        const contactTextArea = contactTextAreaRef.current.value;
        setcontactTextArea(contactTextArea);
        console.log(`${contactFirstName} ${contactLastName} ${contactEmail} ${contactTextArea}`);
        
    };
    
    return(
        <div>
            <ContactForm 
                contactFirstNameRef={contactFirstNameRef}
                contactLastNameRef={contactLastNameRef}
                contactEmailRef={contactEmailRef}
                contactTextAreaRef={contactTextAreaRef}
                contactFormSubmit={contactFormSubmit}
                contactFirstName={contactFirstName}
            />
        </div>
    )
}

export default ContactFormManager;