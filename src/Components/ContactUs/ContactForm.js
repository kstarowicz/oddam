import React, { useState } from 'react';

export const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errName, setErrName] = useState('');
    const [errEmail, setErrEmail] = useState('');
    const [errMessage, setErrMessage] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        let isValid = true;

        // name validation
        if (!name || name.trim().includes(' ')) {
            setErrName('Podane imię jest nieprawidłowe!');
            isValid = false;
        } else {
            setErrName('');
        }

        // e-mail validation
        const regEmail =   /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;


        if (!regEmail.test(email)) {
            setErrEmail('Podany e-mail jest nieprawidłowy!');
            isValid = false;
        } else {
            setErrEmail('');
        }

        // message validation
        if (message.length < 120) {
            setErrMessage("Wiadomość musi mieć conajmniej 120 znaków!");
            isValid = false;
        } else {
            setErrMessage('');
        }

        // errors or sending the message/clearing form

        if (!isValid) {
            console.log("Errors...")
        } else {
            setName('');
            setEmail('');
            setMessage('');
            setErrName('');
            setErrEmail('');
            setErrMessage('');
            setSuccess("Wiadomość została wysłana. Wkrótce się skontaktujemy.")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="success-msg">{success}</div>
            <div className="input-box-half">
                <label>Wpisz swoje imię</label>
                <input type="text"
                       name="name" value={name}
                       placeholder="Krzysztof"
                       className="input-text"
                       onChange={e => setName(e.target.value)}
                />
                <div className="error-name">{errName}</div>
            </div>
            <div className="input-box-half">
                <label>Wpisz swój email</label>
                <input type="email"
                       name="email"
                       value={email}
                       placeholder="abc@xyz.pl"
                       className="input-text"
                       onChange={e => setEmail(e.target.value)}
                />
                <div className="error-email">{errEmail}</div>
            </div>
            <div className="textarea-box">
                <label>Wpisz swoją wiadomość</label>
                <textarea name="message"
                          value={message}
                          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                          className="input-text" rows="5" onChange={e => setMessage(e.target.value)}
                />
                <div className="error-message">{errMessage}</div>
            </div>
            <div className="contact-form-button">
                <input type="submit" value="Wyślij" className="button"/>
            </div>
        </form>
    );
};