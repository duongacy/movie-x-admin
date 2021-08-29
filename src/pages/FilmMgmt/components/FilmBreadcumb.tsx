import { Breadcrumb } from 'antd';
import React from 'react';

interface Props {}

const FilmBreadcumb = (props: Props) => {
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Film management</Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default FilmBreadcumb;
