import ChangeThemeSwitch from './ChangeThemeSwitch/ChangeThemeSwitch';
import ProvinceSelect from './ProvinceSelect/ProvinceSelect';

import React, { createRef, useState } from 'react';
import LogoYDT from './LogoYDT/LogoYDT';
import MenuYDT from './MenuYDT/MenuYDT';
import UserForm from './UserForm/UserForm';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

interface IHeaderYDTProps {}
const HeaderYDT: React.FC<IHeaderYDTProps> = (props) => {
    const [showSecondMenu, setShowSecondMenu] = useState(false);
    return (
        <div>
            <HeaderMiniWrapper>
                <ProvinceSelect />
                <ChangeThemeSwitch />
            </HeaderMiniWrapper>
            <HeaderYDTWrapper className="relative">
                <div className="flex gap-1 laptop:gap-0 items-center">
                    <button onClick={() => setShowSecondMenu(true)} className="text-16 laptop:hidden text-primary-dark flex">
                        <MenuUnfoldOutlined />
                    </button>
                    <div
                        className={`absolute top-0 bg-neutral w-20 h-screen z-20 duration-500 ${
                            showSecondMenu ? 'left-0' : '-left-20'
                        }`}
                    >
                        <button
                            className="absolute right-1 top-1 flex text-primary-dark"
                            onClick={() => setShowSecondMenu(false)}
                        >
                            <MenuFoldOutlined className="text-16" />
                        </button>
                    </div>
                    <LogoYDT className="text-primary-dark" />
                </div>
                <MenuYDT className="hidden laptop:flex text-light" />
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
        <header
            className={`px-1 tablet:px-2 laptop:px-3 h-4 bg-neutral-dark flex items-center gap-1 justify-between text-p-text ${className}`}
        >
            {children}
        </header>
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
