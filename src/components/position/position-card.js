import React from "react";
import SkillsCard from "../skill/skills-card";

class PositionCard extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            skills: this.props.data && this.props.data || [1],
        };
    }

    addNewSkill = () => {
        const {skills} = this.state;
        const arr = [...skills];
        arr.push(arr.length + 1);
        this.setState({
            skills: arr,
        });
    };

    render() {
        const {data, name} = this.props;
        const {skills} = this.state;
        return (
            <div className="list-group-item">
                <p>{ name ? name : "Position" }</p>
                <div className="row">
                    <div className="col-md-10">
                    {
                        skills.map(el =>
                            <SkillsCard key={data && el.skill ? el.skill : el} name={el.skill} value={el.level} />
                        )
                    }
                    </div>
                    <div className="col-md-2 m-auto">
                        <i className="fas fa-plus-circle fa-2x" onClick={this.addNewSkill}></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default PositionCard;
