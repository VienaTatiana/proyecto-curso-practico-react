import React from 'react';
import '../styles/RecoveryPass.scss';


const RecoveryPass = () => {
    return (
        <div className ="email">
        <div className ="email-container">
            <img src="./logos/logo_yard_sale.svg" alt="logo" className ="logo" />
            
            <h1 className ="title">Email has been sent!</h1>
            <p className ="subtitle">Please check your inbox for instructions on how to reset the password</p>

            <div className ="circle">
            <img src="./icons/email.svg" alt="logo-email" className ="logo-email"> /</img>
            </div>

            <input type="submit" value="Login" className ="primary-button login-button" />

            <p className ="resend">
                <span>Didn´t receive the email?</span>
                <a href="/">Resend</a>
            </p>

        </div>

    </div>
    );
}

export default RecoveryPass;