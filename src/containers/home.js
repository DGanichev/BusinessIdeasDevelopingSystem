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
							<h1>Business Ideas Developing System</h1>
                                <p>
								Many people have potentially profitable ideas. Did you know that many have imagined the iPhone, virtual reality and services like Uber years before they become reality?
								</p>
								<hr />
								<p>
								There is a big difference between thinking about something and doing it in practice. Many people have difficulty in creating the right team with the right people.
								</p>
								<hr />
								<p>The system will help create good teams that have the ability to realize an idea.</p>
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
