import { BackTop, Button } from 'antd';
import { ManagementProvider } from '../../contexts/ManagementContext';
import FilmAddModal from './components/FilmAddModal';
import FilmBreadcumb from './components/FilmBreadcumb';
import FilmEditModal from './components/FilmEditModal';
import FilmPagination from './components/FilmPagination';
import FilmSearchName from './components/FilmSearchName';
import FilmTable from './components/FilmTable';

const FilmMgmt = () => {
    return (
        <ManagementProvider>
            <FilmBreadcumb />
            <FilmSearchName />
            <FilmTable />
            <FilmPagination />
            <FilmEditModal />
            <FilmAddModal />
        </ManagementProvider>
    );
};

export default FilmMgmt;
