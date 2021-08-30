import { FilmProvider } from '../../contexts/FilmContext';
import FilmBreadcumb from './components/FilmBreadcumb';
import FilmInputModal from './components/FilmInputModal';
import FilmPagination from './components/FilmPagination';
import FilmSearchName from './components/FilmSearchName';
import FilmTable from './components/FilmTable';

const FilmMgmt = () => {
    return (
        <FilmProvider>
            <FilmBreadcumb />
            <FilmSearchName />
            <FilmTable />
            <FilmPagination />
            <FilmInputModal />
        </FilmProvider>
    );
};

export default FilmMgmt;
