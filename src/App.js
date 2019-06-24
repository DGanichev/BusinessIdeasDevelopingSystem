import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Home, Projects, UserEdit, ProjectCreate, ProjectDetails, ProjectEdit, SearchProfiles, SearchProjects, UserProfile} from "./containers";
import {Footer} from "./components/common";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/projects" exact component={Projects}/>
                    <Route path="/projects/create" exact component={ProjectCreate}/>
                    <Route path="/projects/details/:projectId" exact component={ProjectDetails}/>
                    <Route path="/projects/edit/:projectId" exact component={ProjectEdit}/>
                    <Route path="/search/profiles" exact component={SearchProfiles} />
                    <Route path="/search/projects" exact component={SearchProjects} />
                    <Route path="/user/profile" exact component={UserProfile} />
                    <Route path="/user/edit" exact component={UserEdit}/>
                    <Redirect to="/"/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default App;
