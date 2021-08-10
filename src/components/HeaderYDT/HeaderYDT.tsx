import ChangeThemeSwitch from './ChangeThemeSwitch/ChangeThemeSwitch';
import ProvinceSelect from './ProvinceSelect/ProvinceSelect';

import React, { Fragment } from 'react';
import { Header } from 'antd/lib/layout/layout';
import LogoYDT from './LogoYDT/LogoYDT';
import MenuYDT from './MenuYDT/MenuYDT';
import UserForm from './UserForm/UserForm';

interface IHeaderYDTProps {}
const HeaderYDT: React.FC<IHeaderYDTProps> = (props) => {
    return (
        <div>
            <HeaderMiniWrapper>
                <ProvinceSelect />
                <ChangeThemeSwitch />
            </HeaderMiniWrapper>
            <HeaderYDTWrapper>
                <LogoYDT />
                <MenuYDT />
                <UserForm />
            </HeaderYDTWrapper>
        </div>
    );
};

export default HeaderYDT;

interface IHeaderYDTWrapperProps {}
const HeaderYDTWrapper: React.FC<IHeaderYDTWrapperProps> = ({ children }) => {
    return (
        <Header className="px-1 phone:px-3 h-5 bg-primary flex items-baseline gap-3 justify-between text-p-text">
            {children}
        </Header>
    );
};

interface IHeaderMiniWrapperProps {}
const HeaderMiniWrapper: React.FC<IHeaderMiniWrapperProps> = ({ children }) => {
    return (
        <div className="px-1 phone:px-3 py-4px flex justify-end gap-2 items-center">{children}</div>
    );
};
