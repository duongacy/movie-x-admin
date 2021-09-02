import { createContext, useState } from 'react';
import { setInterval } from 'timers';

export const ManagementContext = createContext<any | null>(null);
export type IPushModalStatus = (code: 'SUCCESS' | 'FAIL', message: string) => void;
export const FilmProvider: React.FC = ({ children }) => {
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

    /* ------------------------------- modal state ------------------------------ */
    const [show, setShow] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [inputFields, setInputFields] = useState<any>({});
    const [formAlert, setFormAlert] = useState<{ code: 'SUCCESS' | 'FAIL'; message: string }>({
        code: 'SUCCESS',
        message: '',
    });

    const pushModalStatus: IPushModalStatus = (code, message) => {
        setFormAlert({ code, message });
        if (code === 'SUCCESS') {
            setTimeout(() => {
                setShow(false);
            }, 2000);
        }
    };
    const showEdit = () => {
        setShow(true);
        setIsEdit(true);
        setFormAlert({
            code: 'SUCCESS',
            message: '',
        });
    };
    const showAdd = () => {
        setShow(true);
        setIsEdit(false);
        setFormAlert({
            code: 'SUCCESS',
            message: '',
        });
        setInputFields({});
    };
    /* -------------------------------------------------------------------------- */

    const data = {
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
        formModalState: {
            show,
            inputFields,
            isEdit,
            formAlert,
            setShow,
            setInputFields,
            pushModalStatus, // khi thêm hoặc sửa cần trả lại status
            showEdit,
            showAdd,
        },
    };
    return <ManagementContext.Provider value={data}>{children}</ManagementContext.Provider>;
};
