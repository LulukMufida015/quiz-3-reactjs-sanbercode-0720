import React from 'react'
import Home from './quiz3/home'
import Movies from './quiz3/MovieList';
import Login from './quiz3/login'
import About from './quiz3/about'
import { Switch, Route } from "react-router";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/MovieList">
                <Movies />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
        </Switch>
    );
};

export default Routes;