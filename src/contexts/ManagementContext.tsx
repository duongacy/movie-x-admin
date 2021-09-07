import { createContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllFilmByNameAction } from 'store/film/filmActions';
import { getUserByNameAction } from 'store/user/userAction';

export const ManagementContext = createContext<any | null>(null);
export const ManagementProvider: React.FC = ({ children }) => {
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
    /* -------------------------------------------------------------------------- */

    /* ------------------------------ film context ------------------------------ */
    const reloadFilm = () => {
        dispatch(getAllFilmByNameAction(searchKey, page, pageSize));
    };
    /* -------------------------------------------------------------------------- */

    /* ------------------------------ user context ------------------------------ */
    const reloadUser = () => {
        dispatch(getUserByNameAction(searchKey, page, pageSize));
    };
    /* -------------------------------------------------------------------------- */
    /* -------------------------------- useEffect ------------------------------- */
    /* -------------------------------------------------------------------------- */

    const data = {
        searchState: {
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
        filmContext: { reloadFilm },
        userContext: { reloadUser },
    };
    return <ManagementContext.Provider value={data}>{children}</ManagementContext.Provider>;
};
