import { createContext, useState } from 'react';

export const FilmContext = createContext<any | null>(null);

export const FilmProvider: React.FC = ({ children }) => {
    // Film management có sử dụng các state chung với nhau (ví dụ người dùng đang search 1 từ khóa nào đó,
    // xong lại bấm chuyển page dưới phần paginator,
    // thì sẽ phải trả về kết quả phân trang của cái từ khóa đó thôi, không trả về tất cả
    // => nên sử dụng context để lưu các state chung, mỗi lần search hoặc bấm phân trang thì sẽ lưu state ở đây

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
    const [inputFields, setInputFields] = useState<any>({});
    /* -------------------------------------------------------------------------- */

    const data = {
        searchKeyState: {
            searchKey,
            setSearchKey,
        },
        searchDateState:{},
        paginationState: {
            page,
            setPage,
            pageSize,
            setPageSize,
        },
        formModalState: {
            show,
            setShow,
            inputFields,
            setInputFields,
        },
    };
    return <FilmContext.Provider value={data}>{children}</FilmContext.Provider>;
};
