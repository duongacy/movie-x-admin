import { Button, Pagination } from 'antd';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ManagementContext } from '../../../contexts/ManagementContext';

interface Props {}

const FilmPagination = (props: Props) => {
    const { paginationState } = useContext(ManagementContext);
    const { page, setPage, setPageSize, pageSize } = paginationState;
    const { filmStore } = useSelector((root: any) => root);
    const { totalCount } = filmStore;

    return (
        <Pagination
            current={page}
            total={totalCount}
            showTotal={(total: number) => <Button>{total}</Button>}
            onChange={(p, ps) => {
                setPage(p);
                setPageSize(ps);
            }}
            defaultPageSize={pageSize}
        />
    );
};

export default FilmPagination;
