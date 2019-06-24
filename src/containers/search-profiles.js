import React from 'react';
import {Navbar} from "../components/common";
import {SearchCard} from "../components/search-card";
import {TableRow} from "../components/search-table";
import {ProjectService, SearchService} from "../service";

class SearchProfiles extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            myProjects: [],
            searchResults: [],
        };
    }

    componentDidMount() {
        ProjectService.getMyProjects().then(data => {
            this.setState({
                myProjects: data,
            });
        });
        SearchService.getSearchResults().then(data => {
            this.setState({
                searchResults: data,
            });
        })
    }

    render() {
        const {myProjects, searchResults} = this.state;
        return (
            <div className="search-profiles">
                <Navbar/>
                <div className="row justify-content-center mt-4">
                    <div className="col-md-11">
                        <div className="card">
                            <div className="card-header">
                                Search profiles
                            </div>
                            <div className="card-body">
                                <SearchCard data={myProjects} type={"profiles"}/>
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
                                        <th scope="col">Username</th>
                                        <th scope="col">Project name</th>
                                        <th scope="col">Position name</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        {
                                            searchResults && searchResults.map(item => (
                                                <TableRow key={item.user_id} data={item} />
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

export default SearchProfiles;
