import React from 'react';
import {ProjectBase} from "./index";

const ProjectBaseList = ({projects}) => (
    <div className="card-columns">
        {projects.map(project => (
            <ProjectBase key={project.name} id={project.id} name={project.name} description={project.description} date={project.date} users={project.users} />
        ))}
    </div>
);

export default ProjectBaseList;
