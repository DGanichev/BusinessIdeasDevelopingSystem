import React from 'react';
import {UserService} from "../../service";
import {Link} from "react-router-dom";

const Navbar = () => (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to="/projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
                <Link to="/projects/create" className="nav-link">Create project</Link>
            </li>
            <li className="nav-item">
                <Link to="/search/profiles" className="nav-link">Search profiles</Link>
            </li>
            <li className="nav-item">
                <Link to="/search/projects" className="nav-link">Search projects</Link>
            </li>
        </div>
        <div className="navbar-nav">
            <li className="nav-item">
                <Link to="/user/profile" className="nav-link">
                    <img src="/images/default_pic.png" className="rounded mr-2" width="26px" height="26px" alt=""/>
                    {UserService.getLoggedInUser().username}
                </Link>
            </li>
            <li className="nav-item pl-3">
                <Link to="/" className="nav-link">Logout</Link>
            </li>
        </div>
    </nav>
);

export default Navbar;
