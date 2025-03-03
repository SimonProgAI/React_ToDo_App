import React from "react";


const ContactForm = () => {

    return (
        <form>
            <label>Name<input type="text" placeholder="first & last names"></input></label><br></br>
            <label>Email<input type="email" placeholder="your@email.com"></input></label><br></br>
            <label>What can we do for you?<input type="text" placeholder="Tell us what we can do for you."></input></label><br></br>
            <button>Submit</button>
        </form>
    )
}



export default ContactForm;
