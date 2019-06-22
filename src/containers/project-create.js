import React from "react";
import {Navbar} from "../components/common";
import {ProjectCreateForm} from "../components/project";

class ProjectCreate extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
        };
    }


    render () {
        return (
            <div className="project-create">
                <Navbar/>
                <div className="row justify-content-center mt-4">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header text-center">
                                Create new project
                            </div>
                            <div className="card-body">
                                <ProjectCreateForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCreate;
