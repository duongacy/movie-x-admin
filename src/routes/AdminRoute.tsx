import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/User/LoginPage/LoginPage';

interface IAdminRouteProps {
    path: string;
    exact?: boolean;
}
const AdminRoute: React.FC<IAdminRouteProps> = ({ children, path, ...restProps }) => {
    // chỗ này check xem có phải admin hay chưa
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin === null) {
        return <Route render={() => <LoginPage returnPath={path} />} />;
    }
    return <Route {...restProps}>{children}</Route>;
};
export { AdminRoute };
