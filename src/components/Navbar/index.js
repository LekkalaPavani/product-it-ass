// src/components/Navbar.js
import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importing Font Awesome

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-header">
                <h3>User Name</h3>
            </div>
            <ul className="navbar-list">
            <li className="navbar-item">
                    <i className="fas fa-tachometer-alt"></i>
                    <Link to="/" className='navbar-head'>Dashboard</Link>
                </li>
                <li className="navbar-item">
                    <i className="fas fa-plus"></i>
                    <Link to="/createassessment" className='navbar-head'>Create Assessment</Link>
                </li>
                <li className="navbar-item">
                    <i className="fas fa-users-cog"></i>
                    <Link to="/accessmanagement" className='navbar-head'>Access Management</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
