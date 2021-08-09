import { Switch } from 'antd';
import * as React from 'react';
import { ISwitchCallbackChange, ISwitchSize } from './designTypes';

interface ISwitchYDTProps {
    unCheckText?: string;
    checkText?: string;
    defaultChecked?: boolean;
    callbackChange?: ISwitchCallbackChange;
    size?: ISwitchSize;
}

const SwitchYDT: React.FunctionComponent<ISwitchYDTProps> = ({
    unCheckText,
    checkText,
    callbackChange,
    ...restParam
}) => {
    return (
        <Switch
            checkedChildren={unCheckText}
            unCheckedChildren={checkText}
            {...restParam}
            onChange={callbackChange}
        />
    );
};

export default SwitchYDT;
