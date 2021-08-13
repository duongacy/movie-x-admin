import ChangeThemeSwitch from './ChangeThemeSwitch/ChangeThemeSwitch';
import ProvinceSelect from './ProvinceSelect/ProvinceSelect';

import React, { createRef, Fragment, useState } from 'react';
import { Header } from 'antd/lib/layout/layout';
import LogoYDT from './LogoYDT/LogoYDT';
import MenuYDT from './MenuYDT/MenuYDT';
import UserForm from './UserForm/UserForm';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

interface IHeaderYDTProps {}
const HeaderYDT: React.FC<IHeaderYDTProps> = (props) => {
    const [showSecondMenu, setShowSecondMenu] = useState(false);

    const menuRef = createRef();

    return (
        <div>
            <HeaderMiniWrapper>
                <ProvinceSelect />
                <ChangeThemeSwitch />
            </HeaderMiniWrapper>
            <HeaderYDTWrapper className="relative">
                <div className="flex gap-1 laptop:gap-0">
                    <button onClick={() => setShowSecondMenu(true)}>
                        <MenuUnfoldOutlined className="text-16 laptop:hidden" />
                    </button>
                    <div
                        className={`absolute top-0 bg-p-dark w-20 h-screen z-20 duration-500 ${
                            showSecondMenu ? 'left-0' : '-left-20'
                        }`}
                    >
                        <button
                            className="absolute right-1 top-0 h-1"
                            onClick={() => setShowSecondMenu(false)}
                        >
                            <MenuFoldOutlined className="text-16" />
                        </button>
                    </div>
                    <LogoYDT />
                </div>

                <MenuYDT className="hidden laptop:flex" />
                <UserForm />
            </HeaderYDTWrapper>
        </div>
    );
};

export default HeaderYDT;

interface IHeaderYDTWrapperProps {
    className?: string;
}
const HeaderYDTWrapper: React.FC<IHeaderYDTWrapperProps> = ({ children, className = '' }) => {
    return (
        <Header
            className={`px-1 tablet:px-2 laptop:px-3 h-4 bg-primary flex items-center gap-1 justify-between text-p-text ${className}`}
        >
            {children}
        </Header>
    );
};

interface IHeaderMiniWrapperProps {}
const HeaderMiniWrapper: React.FC<IHeaderMiniWrapperProps> = ({ children }) => {
    return (
        <div className="px-1 tablet:px-2 laptop:px-3 py-4px flex gap-2 items-center justify-between">
            {children}
        </div>
    );
};
