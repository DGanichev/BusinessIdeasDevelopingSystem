import React from 'react';
import {LoginForm, RegisterForm} from "../components/user";
import {UserService} from "../service";

class Home extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            form: 'login'
        };
    }

    login = () => {
        UserService.login().then(() => {
            this.props.history.push('/projects');
        });
    };

    render() {
        return (
            <div className="home">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="jumbotron">
                                <h1 className="display-4">Hello, world!</h1>
                                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for
                                    calling extra attention to featured content or information.</p>
                                <hr className="my-4"/>
                                <p>It uses utility class for typography and spacing to space content out
                                    within the larger container.</p>
                                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header text-center">
                                    <h5>{this.state.form === 'login' ? 'Login' : 'Register'}</h5>
                                </div>
                                <div className="card-body">
                                    {this.state.form === 'login' ?
                                        <LoginForm onNewAccountClick={() => this.setState({form: 'register'})}
                                                   onSubmit={this.login}/> :
                                        <RegisterForm onLoginClick={() => this.setState({form: 'login'})}
                                                      onSubmit={this.login}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
