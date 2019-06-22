import React from "react";
import {PositionCard} from '../position';

class ProjectForm extends React.PureComponent {
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
        const { data } = this.props;
        data && this.setState({
            positions: data.positions,
        });
        const { positions } = this.state;
        return (
            <form onSubmit={e => {
                e.preventDefault();
                //this.props.onSubmit()
            }}>
                <div className="form-group">
                    <input type="text" value={data && data.name ? data.name : ""} className="form-control" id="projectName" aria-describedby="projectNameHelp"
                           placeholder="Project name" onChange={()=>{}}/>
                </div>
                <div className="form-group">
                    <textarea rows="5" value={data && data.description ? data.description : ""} className="form-control" id="description" aria-describedby="descriptionHelp"
                           placeholder="Project description" onChange={()=>{}}/>
                </div>
                <div className="form-group">
                    {
                        positions && positions.map(el => (
                            <PositionCard key={data && el.name ? el.name : el} data={el.skills} name={el.name} />
                        ))
                    }
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-4">
                            <button type="button" className="btn btn-primary" onClick={this.addNewPosition}>Add position</button>
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

export default ProjectForm;
