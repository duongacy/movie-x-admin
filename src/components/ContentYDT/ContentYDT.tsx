import React from 'react';
import HomePage from '../../pages/Home/HomePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../../pages/User/LoginPage/LoginPage';

interface IContentYDTProps {}

const ContentYDT: React.FC<IContentYDTProps> = ({ children }) => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/users/login" render={Login}></Route>
            <Route path="/"></Route>
        </Switch>
    );
};

export default ContentYDT;
