import { Pagination } from 'antd';
import { ManagementContext } from 'contexts/ManagementContext';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

interface Props {}

const UserPagination = (props: Props) => {
    const { userTotalCount } = useSelector((root: any) => root.userStore);
    const { paginationState } = useContext(ManagementContext);
    const { page, pageSize, setPage, setPageSize } = paginationState;

    const hangleChangePagination = (p: number, ps: number | undefined) => {
        setPage(p);
        setPageSize(ps);
    };
    return (
        <Pagination
            total={userTotalCount}
            onChange={hangleChangePagination}
            defaultPageSize={pageSize}
            current={page}
        />
    );
};

export default UserPagination;
