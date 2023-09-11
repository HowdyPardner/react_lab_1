/*
3. Create a component that renders a form with input fields for name, email, and message. When the form is submitted, the data should be displayed on the page.
    • Create a new functional component called (ContactForm).
    • Add state properties called name, email, and message to the component using the usestate hook.
    
*/

import React from 'react'
import { useState } from 'react'


function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submittedData, setSubmittedData] = useState([]);
  


    // onSubmit will store the user input in an opbject and add that object to the submitted data array
    const handleSubmit = (e) =>{
        e.preventDefault();

        // store the user input into an object
        const userInputInfo = {
            name: name,
            email: email,
            message: message
        }
        
        // add the userinput to the into the submitted data array along with the previous data
        setSubmittedData([...submittedData,userInputInfo]);
        

        // clear the inputs after submission
        setName('');
        setEmail('');
        setMessage('');

        console.log(submittedData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='message' value={message} onChange={(e) => setMessage(e.target.value)} /><br />
                <button type='submit'>Submit Your Info!</button>
            </form>

            
            {
            // map over the submitted data array and output the user input data
            submittedData.map((data, index) => (
                <div style={{border:"1px solid black"}} key={index}>
                    <h3>User Info </h3>
                    <button>X</button>
                    <p>Name: {data.name}</p>
                    <p>Email: {data.email}</p>
                    <p>Message: {data.message}</p>
                </div>
            ))}
        </div>
    )
}

export default ContactForm