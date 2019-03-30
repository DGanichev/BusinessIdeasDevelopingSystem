import React from 'react';

const RegisterForm = ({onLoginClick, onSubmit}) => (
    <form onSubmit={e => {e.preventDefault(); onSubmit() }}>
        <div className="form-group">
            <input type="text" className="form-control" id="firstName" aria-describedby="firstNameHelp"
                   placeholder="First name"/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" id="lastName" aria-describedby="lastNameHelp"
                   placeholder="Last name"/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" id="username" aria-describedby="usernameHelp"
                   placeholder="Username"/>
        </div>
        <div className="form-group">
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" id="password" placeholder="Password"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" id="rePassword" placeholder="Repeat password"/>
        </div>
        <button type="submit" className="btn btn-primary btn-block my-4">Register</button>
        <p className="card-text text-center">You have an account? Log in <a
            href="#"
            onClick={e => {
                e.preventDefault();
                onLoginClick();
            }}>here</a>.</p>
        <p className="card-text text-center">or register with:</p>
        <div className="container text-center">
            <a href="#" className="btn btn-social-icon btn-facebook mx-2" role="button">
                <i className="fab fa-facebook-f"/>
            </a>
            <a href="#" className="btn btn-social-icon btn-google mx-2" role="button">
                <i className="fab fa-google"/>
            </a>
            <a href="#" className="btn btn-social-icon btn-linkedin mx-2" role="button">
                <i className="fab fa-linkedin-in"/>
            </a>
        </div>
        <hr/>
        <p className="card-text text-center">By clicking
            <em>Register</em> you agree to our
            <a href="#" target="_blank">terms of service</a>
        </p>
    </form>
);

export default RegisterForm;
