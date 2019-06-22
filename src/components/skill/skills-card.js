import React from "react";

const SkillsCard = ({name, value}) => (
    <div className="row mt-1">
        <div className="col-md-7">
            <input type="text" value={ name ? name : ""} className="form-control" id="skillName"
                   aria-describedby="skillNameHelp"
                   placeholder="Skill" onChange={()=>{}}/>
        </div>
        <div className="col-md-5">
            <input type="text" value={ value ? value : ""} className="form-control" id="skillValue"
                   aria-describedby="skillValueHelp"
                   placeholder="Value" onChange={()=>{}}/>
        </div>
    </div>
);

export default SkillsCard;
