import { Button, Pagination } from 'antd';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { FilmContext } from '../../../contexts/FilmContext';

interface Props {}

const FilmPagination = (props: Props) => {
    const { paginationState } = useContext(FilmContext);
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
                // mỗi lần change page sẽ set 2 thằng này trên context
            }}
        />
    );
};

export default FilmPagination;
