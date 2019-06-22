import React from "react";
import SkillArea from "../skill/skill-area";

class PositionArea extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            skills: [1, 2],
        };
    }

    addNewSkill = () => {
        const {skills} = this.state;
        skills.push(skills.length + 1);
        this.setState({
            skills: skills,
        });
    };

    render() {
        const {skills} = this.state;
        return (
            <div className="list-group-item">
                <p>Position </p>
                <div className="row">
                    <div className="col-md-10">
                    {
                        skills.map(el =>
                            <SkillArea key={el} />
                        )
                    }
                    </div>
                    <div className="col-md-2 m-auto">
                        <button className="btn btn-primary m-auto" onClick={this.addNewSkill}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PositionArea;
