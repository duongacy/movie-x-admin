import { Button, Pagination } from 'antd';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ManagementContext } from '../../../contexts/ManagementContext';

interface Props {}

const FilmPagination = (props: Props) => {
    const { paginationState } = useContext(ManagementContext);
    const { setPage, setPageSize } = paginationState;
    const { filmStore } = useSelector((root: any) => root);
    const { totalCount } = filmStore;

    return (
        <Pagination
            total={totalCount}
            showTotal={(total: number, range: [number, number]) => <Button>{total}</Button>}
            onChange={(page, pageSize) => {
                setPage(page);
                setPageSize(pageSize);
            }}
        />
    );
};

export default FilmPagination;
