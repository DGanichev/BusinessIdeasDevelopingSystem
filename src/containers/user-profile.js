import React from 'react';
import {Navbar} from "../components/common";
import {UserProfileCard} from "../components/user";
import {UserService} from "../service";

class UserProfile extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            userData: {}
        }
    }

    componentDidMount() {
        const data = UserService.getLoggedInUser();
        this.setState({
            userData : data
        });
    }

    render() {
        const {userData} = this.state;
        return (
            <div className="user-edit">
                <Navbar/>
                <div className="row justify-content-center mt-4">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header text-center">
                                Profile details
                            </div>
                            <div className="card-body">
                                <UserProfileCard data={userData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;
