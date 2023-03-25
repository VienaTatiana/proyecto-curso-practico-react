import React, {useRef} from 'react';
import '@styles/Login.scss';

import logoYard from '@logos/logo_yard_sale.svg';

const Login = () => {
    const formulario = useRef(null);

    const handleSubmit = ()=> {
        event.preventDefault();
        const formData = new FormData(formulario.current);
        const data = {
            usename: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }

    return (
        <div className ="login">
        <div className ="form-container">
            <img src={logoYard} alt="logo" className ="logo" />

            <form action="/" className ="form" ref={formulario}>
                <div>
                    <label htmlFor="email" className ="label">Email address</label>
                    <input type="email" name ="email" placeholder="user@example.com" className ="input input-email" />
                    <label htmlFor="password" className ="label">Password</label>
                    <input type="password" name ="password" placeholder="*********" className ="input input-password" />
                    <button type="submit" className ="primary-button login-button" onClick ={handleSubmit}>Log in</button>
                    <p className ="forgot-password">
                        <a href="./new-pass.html">Forgot my password</a>
                    </p>
                </div>
                    <button className ="secondary-button signup-button">Sign up</button>
            </form>
        </div>
    </div>
    );
}

export default Login;