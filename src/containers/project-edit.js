import React from 'react';
import {Navbar} from "../components/common"
import {ProjectForm} from "../components/project";
import {ProjectService} from "../service";

class ProjectEdit extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            myProject: {},
            projectInvitedTo: {}
        };

    }

    componentDidMount() {
        const {projectId} = this.props.match.params;
        ProjectService.getMyProjects().then(data => {
            this.setState({
                myProject: data.filter(item => item.id === projectId)[0],
            });
        });
        ProjectService.getProjectsInvitedTo().then(data => {
            this.setState({
                projectInvitedTo: data.filter(item => item.id === projectId)[0],
            });
        });
    }

    render() {
        const {myProject, projectInvitedTo} = this.state;
        const projectData = myProject == null ? projectInvitedTo : myProject;
        return (
            <div className="project-edit">
                <Navbar/>
                <div className="row justify-content-center mt-4">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header text-center">
                                Edit project
                            </div>
                            <div className="card-body">
                                <ProjectForm data={projectData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectEdit;
