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

        this.addSkill = this.addSkill.bind(this);
    }

    addSkill() {
        const {skills} = this.state;
        const arr = [...skills];
        arr.push({name: '', value: 1});
        this.setState({
            skills: arr
        })
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
                <div className="form-group">
                    <input type="text" className="form-control" id="lastName" aria-describedby="mobileNumHelp"
                           placeholder="Mobile number"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="lastName" aria-describedby="emailHelp"
                           placeholder="E-mail"/>
                </div>
                <div className="form-group">
                    <textarea type="text" className="form-control" rows="5" id="lastName" aria-describedby="descriptionHelp"
                           placeholder="Description"/>
                </div>
                <div className="list-group">
                    {this.state.skills.map(skill => (
                        <div className="list-group-item" key={skill.name}>
                            <div className="form-group">
                                <input type="text" className="form-control" id="username"
                                       aria-describedby="usernameHelp"
                                       placeholder="Skill" value={skill.name} onChange={()=>{}}/>
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
                <div className="form-group mt-2">
                    <div className="row">
                        <div className="col-md-4">
                            <button type="button" className="btn btn-primary" onClick={this.addSkill}>Add skill</button>
                        </div>
                    </div>
                </div>
				<button type="button" className="mt-4 btn btn-primary btn-block">Save</button>
            </form>
        );
    }
}

export default UserForm;
