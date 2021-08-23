import React, { Fragment, ReactNode } from 'react';
import { Route } from 'react-router-dom';

interface IAccountTemplateProps {
    templateComponent: ReactNode;
    path: string;
    exact: boolean;
}

const AccountTemplate: React.FC<IAccountTemplateProps> = ({ templateComponent, ...restProps }) => {
    return <Route {...restProps}>{templateComponent}</Route>;
};

export default AccountTemplate;
