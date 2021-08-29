import FilmBreadcumb from './components/FilmBreadcumb';
import FilmInputModal from './components/FilmInputModal';
import FilmPagination from './components/FilmPagination';
import FilmSearch from './components/FilmSearch';
import FilmTable from './components/FilmTable';

const FilmMgmt = () => {
    return (
        <>
            <FilmBreadcumb />
            <FilmSearch />
            <FilmTable />
            <FilmPagination />
            <FilmInputModal />
        </>
    );
};

export default FilmMgmt;
