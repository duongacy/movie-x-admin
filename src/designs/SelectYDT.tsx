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
}
const SelectYDT: React.FC<IProps> = ({
    options,
    callbackChange,
    callbackFocus,
    callbackBlur,
    callbackSearch,
    ...restParam
}) => {
    const { Option } = Select;
    return (
        <Select
            style={{ minWidth: 150 }}
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
    );
};

export default SelectYDT;
