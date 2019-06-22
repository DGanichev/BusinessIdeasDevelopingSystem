import React from 'react';
import {SkillList} from '../skill/';

const ProjectDetailsCard =({data, positions}) => (
    <div className="project-details-card">
        <div className="row">
            <div className="col-md-5">
                <h4>{data.name}</h4>
            </div>
            <div className="col-md-2">
                <i className="fas fa-users">{data.users}</i>
            </div>
            <div className="col-md-5">
                <a href={`/projects/edit/${data.id}`} className="white-text btn btn-primary btn-block">
                    Edit
                </a>
            </div>
        </div>
        <hr />
        <div className="row">
            <div className="col-md-12">
                {data.description}
            </div>
        </div>
        <hr />
        <div className="row">
            <div className="col-md-12">
                {
                    positions && positions.map(p => (
                        <SkillList key={p.name} name={p.name} skills={p.skills} />
                    ))
                }
            </div>
        </div>
    </div>
);

export default ProjectDetailsCard;
