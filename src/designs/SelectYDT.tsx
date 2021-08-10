import React from 'react';
import { Select } from 'antd';
import {
    IOption,
    ISelectCallbackBlur,
    ISelectCallbackChange,
    ISelectCallbackFocus,
    ISelectCallbackSearch,
    ISizeType,
} from './designTypes';
import { v4 as uuid } from 'uuid';

interface IProps {
    options: IOption[];
    callbackChange?: ISelectCallbackChange;
    callbackFocus?: ISelectCallbackFocus;
    callbackBlur?: ISelectCallbackBlur;
    callbackSearch?: ISelectCallbackSearch;

    placeholder?: string;
    size?: ISizeType;
    showSearch?: boolean;
    outerClass?: string;
}
const SelectYDT: React.FC<IProps> = ({
    options,
    callbackChange,
    callbackFocus,
    callbackBlur,
    callbackSearch,
    outerClass,
    ...restParam
}) => {
    const { Option } = Select;
    return (
        <div className={`overflow-hidden ${outerClass}`}>
            <Select
                style={{ minWidth: 150, border:"0" }}
                optionFilterProp="children"
                onChange={callbackChange}
                onFocus={callbackFocus}
                onBlur={callbackBlur}
                onSearch={callbackSearch}
                filterOption={(input, option: any) => {
                    return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                }}
                {...restParam}
            >
                {options.map((opt) => (
                    <Option key={uuid()} value={opt.value}>
                        {opt.name}
                    </Option>
                ))}
            </Select>
        </div>
    );
};

export default SelectYDT;
