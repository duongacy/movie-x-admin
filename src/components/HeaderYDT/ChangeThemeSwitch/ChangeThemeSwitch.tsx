import React, { useState } from 'react';
import { useEffect } from 'react';
import { Switch } from 'antd';
import SwitchYDT from '../../../designs/SwitchYDT';
import { ISwitchCallbackChange } from '../../../designs/designTypes';

interface IChangeThemeSwitchProps {}
const ChangeThemeSwitch: React.FC<IChangeThemeSwitchProps> = (props) => {
    const getLocalTheme = (): string => {
        return localStorage.getItem('theme') || 'light'; // neu nhu chua co gi thi theme = 'light'
    };
    const [themeSelected, setThemeSelected] = useState(getLocalTheme());

    useEffect(() => {
        document.documentElement.className = themeSelected;
        localStorage.setItem('theme', themeSelected);
    }, [themeSelected]);

    const handleChangeTheme:ISwitchCallbackChange = (checked, event) => {
        if (checked) {
            setThemeSelected('dark');
        } else {
            setThemeSelected('light');
        }
    };
    return (
        <SwitchYDT unCheckText="Light" checkText="Dark" defaultChecked={themeSelected === 'dark'} callbackChange={handleChangeTheme} />
        // <Switch size="small" unCheckedChildren="Dark" checkedChildren="Light" defaultChecked={themeSelected === 'dark'} onChange={handleChangeTheme}/>
    );
};

export default ChangeThemeSwitch;
