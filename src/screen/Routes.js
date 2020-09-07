import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import Board from "./Board";
import Profile from "./Profile";
import Menus from "../components/Menus/Menus";

function Routes () {

    return(
        <BrowserRouter>
            <Menus/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/boards" component={Board} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
