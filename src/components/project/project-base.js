import React from 'react';

const ProjectBase = ({name, description}) => (
    <div className="card">
        <div className="card-body">
            <div className="card-title">{name}</div>
            <div className="card-text">{description}</div>
        </div>
    </div>
);

export default ProjectBase;
