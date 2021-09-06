import { createContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllFilmByNameAction } from 'store/film/filmActions';

export const ManagementContext = createContext<any | null>(null);
export const FilmProvider: React.FC = ({ children }) => {
    const dispatch = useDispatch();
    /* ------------------------------ search state ------------------------------ */
    const [searchKey, setSearchKey] = useState('');
    /* -------------------------------------------------------------------------- */

    /* ------------------------------- searchDate ------------------------------- */
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    /* -------------------------------------------------------------------------- */

    /* ---------------------------- pagination state ---------------------------- */
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    /* -------------------------------------------------------------------------- */

    /* ----------------------------- add modal state ---------------------------- */
    const [showAddModal, setShowAddModal] = useState(false);
    /* -------------------------------------------------------------------------- */

    /* ---------------------------- edit modal state ---------------------------- */
    const [showEditModal, setShowEditModal] = useState(false);
    const [inputFields, setInputFields] = useState<any>({});

    const reloadFilm = (sk = searchKey, p = page, ps = pageSize) => {
        dispatch(getAllFilmByNameAction(sk, p, ps));
    };
    /* -------------------------------------------------------------------------- */

    /* -------------------------------- useEffect ------------------------------- */
    useEffect(() => {
        reloadFilm();
    }, [page, pageSize, searchKey]);
    /* -------------------------------------------------------------------------- */

    const data = {
        common: { reloadFilm },
        searchKeyState: {
            searchKey,
            setSearchKey,
        },
        searchDateState: {},
        paginationState: {
            page,
            pageSize,
            setPage,
            setPageSize,
        },

        editModalState: {
            showEditModal,
            setShowEditModal,
            inputFields,
            setInputFields,
        },
        addModalState: {
            showAddModal,
            setShowAddModal,
        },
    };
    return <ManagementContext.Provider value={data}>{children}</ManagementContext.Provider>;
};
