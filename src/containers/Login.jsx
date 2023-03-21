import React from 'react';

const Login = () => {
    return (
        <div className ="login">
        <div className ="form-container">
            <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo" />

            <form action="/" className ="form">
                <div>
                    <label for="email" className ="label">Email address</label>
                    <input type="email" id="email" placeholder="user@example.com" className ="input input-email" />

                    <label for="password" className ="label">Password</label>
                    <input type="password" id="password" placeholder="*********" className ="input input-password" />

                    <input type="submit" value="Login" className ="primary-button login-button" />
            
                    <p className ="forgot-password">
                        <a href="./new-pass.html">Forgot my password</a>
                    </p>
                </div>
                    <input type="submit" value="Sign up" className ="secondary-button signup-button" />
            </form>
        </div>
    </div>
    );
}

export default Login;