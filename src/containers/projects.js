import React from 'react';
import {Navbar} from "../components/common";
import {ProjectService} from "../service";
import {ProjectBaseList} from "../components/project";

class Projects extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            myProjects: [],
            projectsInvitedTo: []
        };
    }

    componentDidMount() {
        ProjectService.getMyProjects().then(data => {
            this.setState({
                myProjects: data
            });
        });
        ProjectService.getProjectsInvitedTo().then(data => {
            this.setState({
                projectsInvitedTo: data
            });
        })
    }

    render() {
        return (
            <div className="projects">
                <Navbar/>
                <div className="container">
                    <div className="mt-2 p-3 mb-2 bg-light text-dark rounded">
                        <h1>My projects</h1>
                        <ProjectBaseList projects={this.state.myProjects}/>
                    </div>
                    <hr />
                    <div className="mt-2 p-3 mb-2 bg-light text-dark rounded">
                        <h1>Projects invited to</h1>
                        <ProjectBaseList projects={this.state.projectsInvitedTo}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Projects;
