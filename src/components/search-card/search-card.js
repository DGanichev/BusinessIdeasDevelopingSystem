import React from 'react';
import Dropdown from 'react-dropdown'

import 'react-dropdown/style.css'
import SkillsCard from "../skill/skills-card";

class SearchCard extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            projectName: '',
            projectPosition: '',
            skills: [1, 2],
        };

        this.onProjectNameDropdownChange = this.onProjectNameDropdownChange.bind(this);
        this.onProjectPositionDropdownChange = this.onProjectPositionDropdownChange.bind(this);
    }

    onProjectNameDropdownChange(event) {
        this.setState({
            projectName: event.value
        })
    }

    onProjectPositionDropdownChange(event) {
        this.setState({
            projectPosition: event.value
        })
    }

    render() {
        const {data, type = 'profiles'} = this.props;
        const {projectName, projectPosition, skills} = this.state;
        const positions = data.find(item => item.name === projectName) && data.find(item => item.name === projectName).positions;
        return (
            <div className="search-card">
                {
                    type === 'profiles'
                        ?
                        <div className="row mb-2">
                            <div className="col-md-1"></div>
                            <div className="col-md-5">
                                <Dropdown options={data.map(item => item.name)}
                                          onChange={this.onProjectNameDropdownChange} value={projectName}
                                          placeholder="Select a project"/>
                            </div>
                            <div className="col-md-5">
                                <Dropdown options={positions ? positions.map(item => item.name) : []}
                                          onChange={this.onProjectPositionDropdownChange} value={projectPosition}
                                          placeholder="Select a position"/>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                        :
                        null
                }
                <div className="row mb-2">
                    <div className="col-md-11">
                        <div className="row">
                        {
                            skills.map(el =>
                                <div className="col-md-6">
                                    <SkillsCard key={el}/>
                                </div>
                            )
                        }
                        </div>
                    </div>
                    <div className="col-md-1 d-block m-auto w-25">
                        <i className="fas fa-plus-circle fa-2x" onClick={this.addNewSkill}></i>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button type="button" className="btn btn-primary btn-block" onClick={()=>{}}>Auto search</button>
                    </div>
                    <div className="col-md-6">
                        <button type="submit" className="btn btn-primary btn-block" onClick={()=>{}}>Clear filters</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchCard;
