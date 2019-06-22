import React from 'react';

const SkillsList = ({name, skills}) => (
    <div className="list-group mb-2">
        <div className="list-group-item list-group-item-primary">{name}</div>
        <div className="list-group-item">
            <div className="list-group">
                {
                    skills && skills.map(s => (
                        <div key={s.skill} className="list-group-item">{s.skill} <span className="badge badge-primary">{s.level}</span></div>
                    ))
                }
            </div>
        </div>
    </div>
);

export default SkillsList;
