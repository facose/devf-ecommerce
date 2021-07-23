import React,  { useState } from 'react';
const axios = require('axios');

export const Signup = () => {
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [birthday, setBirthday] = useState();
    const [gender, setGender] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleChange = (e) => {
        if (e.target.id === 'signup-name') {
            setName(e.target.value);
        } else if (e.target.id === 'signup-last-name') {
            setLastName(e.target.value);
        } else if (e.target.id === 'signup-birthday') {
            setBirthday(e.target.value);
        } else if (e.target.id === 'signup-gender') {
            setGender(e.target.value);
        } else if (e.target.id === 'signup-email') {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('https://ecomerce-master.herokuapp.com/api/v1/signup', {
            first_name: name,
            last_name: lastName,
            birth_date: birthday,
            gender: gender,
            email: email,
            password: password
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        })
    }

    return (
        <form className="container signup mt-5" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="signup-name" className="htmlForm-label">Name</label>
                <input type="text" className="form-control" id="signup-name" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="signup-last-name" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="signup-last-name" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="signup-birthday" className="form-label">Birth Date</label>
                <input type="date" className="form-control" id="signup-birthday" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="signup-gender" className="htmlForm-label">Gender</label>
                <select name="gender" id="signup-gender" onChange={handleChange}>
                    <option value="M">M</option>
                    <option value="F">F</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="signup-email" className="form-label">Email</label>
                <input type="email" className="form-control" id="signup-email" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="signup-password" className="form-label">Password</label>
                <input type="password" className="form-control" id="signup-password" onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}