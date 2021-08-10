import React from 'react';
import SelectYDT from '../../../designs/SelectYDT';
import { IOption } from '../../../designs/designTypes';

interface IProps {}
const ProvinceSelect: React.FC<IProps> = (props) => {
    const handleChangeProvince = (value: string) => {
        console.log('Province: ', value);
    };
    return (
        <SelectYDT
            options={provinceOptions}
            placeholder="Chọn khu vực"
            size="small"
            outerClass="border-2 border-secondary hover:border-s-dark rounded-md"
            callbackChange={handleChangeProvince}
            showSearch
        />
    );
};

export default ProvinceSelect;

const provinceOptions: IOption[] = [
    {
        name: 'Hồ Chí Minh',
        value: 'ho_chi_minh',
    },
    {
        name: 'Đà Nẵng',
        value: 'da_nang',
    },
    {
        name: 'Cần Thơ',
        value: 'can_tho',
    },
    {
        name: 'Hà Nội',
        value: 'ha_noi',
    },
];
