import React, {useState} from 'react'
import './Contact.css'

function Contact() {

    //store the name as a variable
    const [name, setName] = useState('Ojiko Moses')

    //show a message when a user submits something
    const [success, setSuccess] = useState(false)
    const [successMessage, setSucessMessage] = useState('')

    //submit function
    const handleSubmit = (e) => {
        e.preventDefault()
        setSuccess(true)
        setName("Ojiko Moses")
        setSucessMessage("Sent successfully.")
    }

    setTimeout(() => {
        if (success) {
           setSuccess(false)
       }
   },3000)

    return (
        <div className='contact_form_container'>
            <form className='contact_form' onSubmit={handleSubmit}>
                <h3 style={{textAlign:"center"}}>Contact Me</h3>
                <p style={{textAlign:"center",fontSize:"12px"}}>Hi there, contact me to ask me about anything you have in mind.</p>
                <div className='contact_form_namecontainer'>
                    <div>
                        <lable htmlFor="first_name">First Name</lable>
                             <input
                             type="text"
                             id="first_name"
                             placeholder="Enter your first name"
                             required
                            />
                    </div>
                    <div>
                        <lable htmlFor="last_name">Last Name</lable>
                             <input
                             type="text"
                             id="last_name"
                             placeholder="Enter your last name"
                             required
                            />
                    </div>
                </div>

                <div>
                        <lable htmlFor="email">Email</lable>
                             <input
                             type="text"
                             id="email"
                             placeholder="youremail@gmail.com"
                             required
                            />
                    </div>

                    <div>
                        <lable htmlFor="message">Message</lable>
                             <textarea
                            id="message"
                            rows="4"
                            cols = "50"
                             placeholder="Send me a message and i will reply you as soon as possible."
                             required
                            />
                </div>
                <div style={{display:"flex", alignItems:"center"}}>
                    <input type="radio" id="radio_btn" />
                    <label htmlFor ="radio_btn" style={{fontSize:"10px"}}>You agree to providing your data to {name} who may contact you.</label>
                </div>
                <div>
                    {/*show success message*/}
                    {
                        success && 
                        <p style={{color:"green", size:"10px"}}>{ successMessage }</p>
                    }
                </div>
                <button id="btn_submit" type="submit">Send message</button> 
            </form>
        </div>
    )
}

export default Contact