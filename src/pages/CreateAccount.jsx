import React from 'react';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
    return (
        <div className="CreateAccount">
        <div className="form-container">
            <h1 className="title">My account</h1>
            <form action="/" className="form-account">
                <div>
                    <label for="name" className="label">Name</label>
                    <input type="text" placeholder= "camila yoko" className="input input-newaccount" />

                    <label for="email" className="label">Email address</label>
                    <input type="email" placeholder="user@example.com" className="input input-email" />

                    <label for="password" className="label">Password</label>
                    <input type="password" placeholder="********" className="input input-password" />
                </div>
                
                <input type="submit" value="Create account" className="primary-button create-button" />    
            </form>

        </div>

    </div>
    );
}

export default CreateAccount;