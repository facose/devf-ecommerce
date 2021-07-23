import React from 'react';
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img src="https://www.pngitem.com/pimgs/m/161-1619330_logos-e-commerce-png-transparent-png.png" className="logo" />
                <ul className="nav-items">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Signup</a></li>
                </ul>
            </div>
        </nav>
    )
}