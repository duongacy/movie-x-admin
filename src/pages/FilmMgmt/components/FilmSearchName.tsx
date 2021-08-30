import { Input, Space } from 'antd';
import React, { ChangeEvent, useContext } from 'react';
import { FilmContext } from '../../../contexts/FilmContext';

interface Props {}

const FilmSearchName = (props: Props) => {
    const { searchKeyState } = useContext(FilmContext);
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
