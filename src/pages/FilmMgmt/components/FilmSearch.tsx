import { Input, Space } from 'antd';
import React from 'react';

interface Props {}

const FilmSearch = (props: Props) => {
    return <Input.Search placeholder="input search text" enterButton />;
};

export default FilmSearch;
