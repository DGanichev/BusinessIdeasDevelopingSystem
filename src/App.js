import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Home, Projects, UserEdit} from "./containers";
import {Footer} from "./components/common";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/projects" exact component={Projects}/>
                    <Route path="/user/edit" exact component={UserEdit}/>
                    <Redirect to="/"/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default App;
