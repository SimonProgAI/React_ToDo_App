import React from "react";

const ContactForm = (
        {
        contactFirstNameRef,
        contactLastNameRef,
        contactEmailRef, 
        contactTextAreaRef, 
        contactFormSubmit,
        }
    ) => {
    return (
        <form>
            <label>First Name<input ref={contactFirstNameRef} type="text" placeholder="first name"></input></label><br></br>
            <label>Last Name<input ref={contactLastNameRef} type="text" placeholder="last name"></input></label><br></br>
            <label>Email<input ref={contactEmailRef} type="email" placeholder="your@email.com"></input></label><br></br>
            <label>Your message<br></br><textarea ref={contactTextAreaRef} row="40" col="20" placeholder="your message"></textarea></label><br></br>
            <button onClick={contactFormSubmit}>Submit</button>
        </form>
    )
}

export default ContactForm;
