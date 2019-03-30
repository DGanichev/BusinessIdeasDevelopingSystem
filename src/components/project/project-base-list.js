import React from 'react';
import {ProjectBase} from "./index";

const ProjectBaseList = ({projects}) => (
    <div className="card-columns">
        {projects.map(project => (
            <ProjectBase key={project.name} name={project.name} description={project.description}/>
        ))}
    </div>
);

export default ProjectBaseList;
