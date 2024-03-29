import React from 'react';

const ProjectBase = ({id, name, description, date, users}) => (
    <div className="card border-primary">
        <div className="card-header bg-transparent">
            {name}
        </div>
        <div className="card-body bg-transparent">
            <div className="card-text">{description}</div>
        </div>
        <div className="card-footer text-center bg-transparent">
            <span className="card-text pr-3"><i className="far fa-clock pr-1"></i>{date}</span>
            <span className="card-text pr-3">
				<i className="fas fa-users">{users}</i>
            </span>
            <span className="card-text pr-3">
                <a href={`/projects/details/${id}`} className="white-text">
                    <i className="fas fa-info-circle"></i>
                </a>
            </span>
        </div>
    </div>
);

export default ProjectBase;
