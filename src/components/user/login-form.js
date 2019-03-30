import React from 'react';

const LoginForm = ({onNewAccountClick, onSubmit}) => (
    <form onSubmit={e => {e.preventDefault(); onSubmit() }}>
        <div className="form-group">
            <input type="email" className="form-control" id="email"
                   aria-describedby="emailHelp" placeholder="Email or username"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" id="password"
                   placeholder="Password"/>
        </div>
        <div className="d-flex justify-content-around">
            <div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="checkbox"/>
                    <label className="form-check-label" htmlFor="checkbox">Remember
                        me</label>
                </div>
            </div>
            <div>
                <a href="#">Forgot password?</a>
            </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block my-4">Login</button>
        <p className="card-text text-center">Do not have an account? Create <a
            href="#"
            onClick={e => {
                e.preventDefault();
                onNewAccountClick();
            }}>one</a>.</p>
        <p className="card-text text-center">or login with:</p>
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
    </form>
);

export default LoginForm;
