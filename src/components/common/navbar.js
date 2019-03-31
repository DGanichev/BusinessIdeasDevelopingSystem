import React from 'react';
import {UserService} from "../../service";
import {Link} from "react-router-dom";

const Navbar = () => (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to="/projects" className="nav-link">Projects</Link>
            </li>
        </div>
        <div className="navbar-nav">
            <li className="nav-item">
                <Link to="/user/edit" className="nav-link">{UserService.getLoggedInUser().username}</Link>
            </li>
            <li className="nav-item pl-3">
                <Link to="/" className="nav-link">Logout</Link>
            </li>
        </div>
    </nav>
);

export default Navbar;
