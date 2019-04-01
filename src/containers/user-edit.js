import React from 'react';
import {Navbar} from "../components/common";
import UserForm from "../components/user/user-form";

class UserEdit extends React.PureComponent {

    render() {
        return (
            <div className="user-edit">
                <Navbar/>
                <div className="row justify-content-center mt-4">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header text-center">
                                Edit profile
                            </div>
                            <div className="card-body">
                                <UserForm/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default UserEdit;
