import React, { useState } from "react";
import emailjs from "emailjs-com";
import './contact.css'
import { useForm } from "react-hook-form";
import NavBar from "../navbar";

function Contact() {
    const [successMessage, setSuccessMessage] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "_-Hjr61bVt8VCPw2B";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                email: data.email,
                description: data.description
            },
            userID
        )
        r.target.reset()
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Form sent succesfully. I'll conatct you soon.");
            }).catch(err => console.error(`Something went wrong. ${err}`));
    };

    return (
        <div id="contact" className="contact">
            <NavBar></NavBar>
            <div className="contact-container">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="row">
                        <div className="col-md-6 col-xs-12 starting-content">
                            <div className="heading">
                                <h1>Contact Us</h1>
                            </div>
                            <div className="description">
                                <p>Have questions about Physics & Astronomy Club, or interested in joining? Please reach out — we’re happy to help.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12 message-content">
                            <span className="success-message">{successMessage}</span>
                            {/* NAME INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    {...register("name", {
                                        required: "Please enter your name",
                                        maxLength: {
                                            value: 20,
                                            message: "Please enter a name with fewer that 20 characters",
                                        },
                                    })}
                                />
                            </div>
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>
                            {/* EMAIL INPUT */}
                            <div className="text-center">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    {...register("email", {
                                        required: "Please provide your email",
                                        pattern: {
                                            value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                            message: "Invalid Email",
                                        }
                                    })}
                                />
                            </div>
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                            {/* DESCRIPTION */}
                            <div className="text-center">
                                <textarea
                                    className="form-control"
                                    placeholder="Please state your query"
                                    name="description"
                                    {...register("description", {
                                        required: "You forgot to write your query",
                                    })}
                                ></textarea>
                            </div>
                            <span className="error-message">
                                {errors.description && errors.description.message}
                            </span>
                            <button className="contact-btn" type="submit">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
