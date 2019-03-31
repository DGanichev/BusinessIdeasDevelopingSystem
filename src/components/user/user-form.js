import React from 'react';
import Slider from "rc-slider";

class UserForm extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            skills: [
                {
                    name: 'C#',
                    value: 5
                },
                {
                    name: 'JAVA',
                    value: 5
                }
            ],
        };
    }

    render() {
        return (
            <form onSubmit={e => {
                e.preventDefault();
                this.props.onSubmit()
            }}>
                <div className="form-group">
                    <input type="text" className="form-control" id="username" aria-describedby="usernameHelp"
                           placeholder="Username"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="firstName" aria-describedby="firstNameHelp"
                           placeholder="First name"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="lastName" aria-describedby="lastNameHelp"
                           placeholder="Last name"/>
                </div>
                <div className="list-group">
                    {this.state.skills.map(skill => (
                        <div className="list-group-item" key={skill.name}>
                            <div className="form-group">
                                <input type="text" className="form-control" id="username"
                                       aria-describedby="usernameHelp"
                                       placeholder="Username" value={skill.name} onChange={()=>{}}/>
                            </div>
                            <Slider
                                min={1}
                                step={1}
                                marks={{
                                    1: '1',
                                    2: '2',
                                    3: '3',
                                    4: '4',
                                    5: '5',
                                    6: '6',
                                    7: '7',
                                    8: '8',
                                    9: '9',
                                    10: '10'
                                }}
                                onChange={() => {}}
                                defaultValue={skill.value}
                                max={10}
                            />
                        </div>
                    ))}
                </div>
            </form>
        );
    }
}

export default UserForm;
