import React from "react";
import {PositionArea} from '../position';

class ProjectCreateForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            positions: [1, 2, 3],
        };
    }

    addNewPosition = () => {
        const {positions} = this.state;
        console.log(positions);
        positions.push(positions.length + 1);
        this.setState({
            skills: positions,
        });
    };

    render() {
        const { positions } = this.state;
        return (
            <form onSubmit={e => {
                e.preventDefault();
                //this.props.onSubmit()
            }}>
                <div className="form-group">
                    <input type="text" className="form-control" id="projectName" aria-describedby="projectNameHelp"
                           placeholder="Project name"/>
                </div>
                <div className="form-group">
                    <textarea rows="5" className="form-control" id="description" aria-describedby="descriptionHelp"
                           placeholder="Project description"/>
                </div>
                <div className="form-group">
                    {
                        positions.map(el => (
                            <PositionArea key={el}/>
                        ))
                    }
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-4">
                            <button type="button" className="btn btn-primary" onClick={()=>{}}>Add position</button>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            <button type="button" className="btn btn-primary btn-block" onClick={()=>{}}>Cancel</button>
                        </div>
                        <div className="col-md-6">
                            <button type="submit" className="btn btn-primary btn-block" onClick={()=>{}}>Save</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default ProjectCreateForm;
