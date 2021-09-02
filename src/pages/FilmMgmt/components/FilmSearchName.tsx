import { Input, Space } from 'antd';
import React, { ChangeEvent, useContext } from 'react';
import { ManagementContext } from '../../../contexts/ManagementContext';

interface Props {}

const FilmSearchName = (props: Props) => {
    const { searchKeyState } = useContext(ManagementContext);
    const { setSearchKey } = searchKeyState;
    return (
        <Input.Search
            placeholder="input search text"
            onSearch={(value: string) => {
                console.log('value ne:', value);

                setSearchKey(value);
            }}
            enterButton
        />
    );
};

export default FilmSearchName;
