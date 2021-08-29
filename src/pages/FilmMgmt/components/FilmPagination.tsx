import { Pagination } from 'antd';
import React from 'react';

interface Props {}

const FilmPagination = (props: Props) => {
    return <Pagination defaultCurrent={6} total={500} />;
};

export default FilmPagination;
