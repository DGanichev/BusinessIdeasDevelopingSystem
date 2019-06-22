import React from "react";

class SkillArea extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row mt-1">
                <div className="col-md-7">
                    <input type="text" className="form-control" id="skillName"
                           aria-describedby="skillNameHelp"
                           placeholder="Skill" onChange={() => {
                    }}/>
                </div>
                <div className="col-md-5">
                    <input type="text" className="form-control" id="skillValue"
                           aria-describedby="skillValueHelp"
                           placeholder="Value" onChange={() => {
                    }}/>
                </div>
            </div>
        );
    }
}

export default SkillArea;
