import { Input, Space } from 'antd';
import React, { ChangeEvent, useContext } from 'react';
import { ManagementContext } from '../../../contexts/ManagementContext';

interface Props {}

const FilmSearchName = (props: Props) => {
    const { searchKeyState, paginationState } = useContext(ManagementContext);
    const { setSearchKey } = searchKeyState;
    const { setPage } = paginationState;
    return (
        <Input.Search
            placeholder="input search text"
            onSearch={(value: string) => {
                setSearchKey(value);
                setPage(1);
            }}
            enterButton
        />
    );
};

export default FilmSearchName;
