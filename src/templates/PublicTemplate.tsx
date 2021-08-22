import React, { Fragment } from 'react';
import { ReactNode } from 'react';
import { Route } from 'react-router-dom';
import FooterYDT from '../components/FooterYDT/FooterYDT';
import HeaderYDT from '../components/HeaderYDT/HeaderYDT';

interface IPropsPublicTemplateProps {
    templateComponent: ReactNode;
    path: string;
    exact: boolean;
}

const PublicTemplate: React.FC<IPropsPublicTemplateProps> = (props) => {
    return (
        <Fragment>
            <HeaderYDT />
            <Route {...props}>{props.templateComponent}</Route>
            <FooterYDT />
        </Fragment>
    );
};

export default PublicTemplate;
