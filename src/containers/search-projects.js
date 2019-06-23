import React from 'react';
import {Navbar} from "../components/common";
import {SearchCard} from "../components/search-card";
import {ProjectService, SearchService} from "../service";
import {TableRow} from "../components/search-table";

class SearchProjects extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            searchResults: [],
        };
    }

    componentDidMount() {
        SearchService.getSearchResults().then(data => {
            this.setState({
                searchResults: data,
            });
        })
    }

    render() {
        const {searchResults} = this.state;
        return (
            <div className="search-projects">
                <Navbar/>
                <div className="row justify-content-center mt-4">
                    <div className="col-md-11">
                        <div className="card">
                            <div className="card-header">
                                Search profiles
                            </div>
                            <div className="card-body">
                                <SearchCard type={"projects"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-md-11">
                        <div className="card">
                            <div className="card-body">
                                <table className="table table-striped">
                                    <thead className="text-center">
                                    <tr>
                                        <th scope="col">Project name</th>
                                        <th scope="col">Position name</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-center">
                                    {
                                        searchResults && searchResults.map(item => (
                                            <TableRow type={"projects"} data={item} />
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchProjects;
