import React, { Fragment } from 'react';
import { ReactNode } from 'react';
import { Route } from 'react-router-dom';
import FooterYDT from '../components/FooterYDT/FooterYDT';
import HeaderYDT from '../components/HeaderYDT/HeaderYDT';

interface IPropsMainTemplateProps {}

const MainTemplate: React.FC<IPropsMainTemplateProps> = ({ children }) => {
    return (
        <Fragment>
            <HeaderYDT />
            {children}
            <FooterYDT />
        </Fragment>
    );
};

export default MainTemplate;
