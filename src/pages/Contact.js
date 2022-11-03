import React from 'react'

function Contact() {
    return (
        <div>
            <form>
                <h3>Contact Me</h3>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
                <div>
                    <div>
                        <lable htmlFor="first_name">First Name</lable>
                             <input
                             type="text"
                             id="first_name"
                             placeholder="Enter your first name"
                             
                            />
                    </div>
                    <div>
                        <lable htmlFor="last_name">Last Name</lable>
                             <input
                             type="text"
                             id="last_name"
                             placeholder="Enter your last name"
                             
                            />
                    </div>

                    <div>
                        <lable htmlFor="email">Email</lable>
                             <input
                             type="text"
                             id="email"
                             placeholder="youremail@gmail.com"
                             
                            />
                    </div>

                    <div>
                        <lable htmlFor="message">Message</lable>
                             <textarea
                            id="message"
                            rows="4"
                            cols = "50"
                             placeholder="Send me a message and i will reply you as soon as possible."
                             
                            />
                    </div>
                </div>
                <button id="btn_submit" type="submit">Send message</button> 
            </form>
        </div>
    )
}

export default Contact