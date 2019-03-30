import React from 'react';
import {UserService} from "../service";

class Projects extends React.PureComponent {

    render() {
        return (
            <div className="projects">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"/>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <img src="../imgs/profile_pic.png" width="32" height="32" className="rounded-circle"/>
                                <span>{UserService.getLoggedInUser().username}</span>
                            </li>
                            <li className="nav-item pl-3">
                                <a href="./home.html" role="button">Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container-fluid pt-2">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">
                                    My projects
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Project 1</li>
                                        <li className="list-group-item">Project 2</li>
                                        <li className="list-group-item">Project 3</li>
                                        <li className="list-group-item">Project 4</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card mt-2">
                                <div className="card-header">
                                    Projects I am taking part in
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Project 1</li>
                                        <li className="list-group-item">Project 2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control"
                                                               placeholder="Search by project name"
                                                               aria-label="Project's name"
                                                               aria-describedby="search-btn"/>
                                                        <div className="input-group-append">
                                                            <button className="btn btn-primary" type="button"
                                                                    id="search-btn">Search
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <div className="dropdown">
                                                        <button className="btn btn-primary dropdown-toggle"
                                                                type="button"
                                                                id="dropdownMenu2" data-toggle="dropdown"
                                                                aria-haspopup="true" aria-expanded="false">
                                                            Search projects by user type
                                                        </button>
                                                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                            <button className="dropdown-item" type="button">Owner
                                                            </button>
                                                            <button className="dropdown-item" type="button">Performer
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-2">
                                <div className="card-body">
                                    Something goes here
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Projects;
