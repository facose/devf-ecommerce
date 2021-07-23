import React, { useState } from 'react';
const axios = require('axios');

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        if (e.target.id === 'login-email') {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://ecomerce-master.herokuapp.com/api/v1/login', {
            email: email,
            password: password
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error(error)
        })
    }

    return (
        <form className="container login mt-5" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="login-email" className="form-label">Email</label>
                <input type="email" className="form-control" id="login-email" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="login-password" className="form-label">Password</label>
                <input type="password" className="form-control" id="login-password" onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}