import React from 'react';
import {UserService} from "../../service";
import {Link} from "react-router-dom";

const Navbar = () => (
    <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to="/projects" className="nav-link">Projects</Link>
            </li>
        </div>
        <div className="navbar-nav">
            <li className="nav-item">
                <span className="navbar-text">{UserService.getLoggedInUser().username}</span>
            </li>
            <li className="nav-item pl-3">
                <Link to="/" className="nav-link">Logout</Link>
            </li>
        </div>
    </nav>
);

export default Navbar;
