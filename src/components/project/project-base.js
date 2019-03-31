import React from 'react';

const ProjectBase = ({name, description, date, users}) => (
    <div className="card">
        <div className="card-header">
            {name}
        </div>
        <div className="card-body">
            <div className="card-text">{description}</div>
        </div>
        <div className="card-footer text-center">
            <span className="card-text pr-3"><i className="far fa-clock pr-1"></i>{date}</span>
            <span className="card-text pr-3">
                <a href="#" className="white-text">
                    <i className="fas fa-users">{users}</i>
                </a>
            </span>
            <span className="card-text pr-3">
                <a href="#" className="white-text">
                    <i className="fas fa-info-circle"></i>
                </a>
            </span>
        </div>
    </div>
);

export default ProjectBase;
