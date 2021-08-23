import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/User/LoginPage/LoginPage';

interface IProtectedRouteProps {
    path: string;
    exact?: boolean;
}
const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ children, path, ...restProps }) => {
    // chỗ này check xem có login hay chưa
    const userLogin = localStorage.getItem('userLogin');
    if (userLogin === null) {
        return <Route render={() => <LoginPage returnPath={path} />} />;
    }
    return <Route {...restProps}>{children}</Route>;
};
export default ProtectedRoute;
