import React, { Fragment, ReactNode } from 'react';
import { Route } from 'react-router-dom';

interface IUserTemplateProps {
    templateComponent: ReactNode;
    path: string;
    exact: boolean;
}

const UserTemplate: React.FC<IUserTemplateProps> = ({ templateComponent, ...restProps }) => {
    return <Route {...restProps}>{templateComponent}</Route>;
};

export default UserTemplate;
