import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from "./Home";
import Board from "./Board";
import Profile from "./Profile";
import Menus from "../components/Menus/Menus";
import PageNotFound from "./PageNotFound";

function Routes () {

    return(
        <BrowserRouter>
            <Menus/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/boards" component={Board} />
                <Route path="/profile" component={Profile} />

                <Route path="/error" component={PageNotFound}/>
                <Redirect path="*" to="/error"/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
