import { Breadcrumb, Button, Pagination, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByNameAction, showModalAddUserAction } from '../../store/user/userAction';
import UserInputModal from './components/UserInputModal';
import { UserTable } from './components/UserTable';

const PAGE = 1;
const PER_PAGE = 10;
const UserMgmt = () => {
    const dispatch = useDispatch();
    /* -------------------------------- useState -------------------------------- */
    const [pageState, setPageState] = useState(PAGE);
    const [pageSizeState, setPageSizeState] = useState(PER_PAGE);
    const [taiKhoanState, setTaiKhoanState] = useState('');
    /* -------------------------------------------------------------------------- */

    /* ----------------------- useSelector and handle data ---------------------- */
    const { userTotalCount } = useSelector((root: any) => root.userStore);
    /* -------------------------------------------------------------------------- */

    /* -------------------------------- useEffect ------------------------------- */
    useEffect(() => {
        dispatch(getUserByNameAction(taiKhoanState, pageState, pageSizeState));
    }, []);
    /* -------------------------------------------------------------------------- */

    /* -------------------------------- function -------------------------------- */
    const handleSearch = (value: string) => {
        setTaiKhoanState(value.toLowerCase());
        dispatch(getUserByNameAction(value.toLowerCase(), pageState, pageSizeState));
    };
    const showAddUser = () => {
        dispatch(showModalAddUserAction());
    };
    const hangleChangePagination = (page: number, pageSize: number = 10) => {
        setPageState(page);
        setPageSizeState(pageSize);
        dispatch(getUserByNameAction(taiKhoanState, page, pageSize));
    };
    /* -------------------------------------------------------------------------- */
    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Admin</Breadcrumb.Item>
                <Breadcrumb.Item>User management</Breadcrumb.Item>
            </Breadcrumb>
            <Button type="primary" className="my-1" onClick={showAddUser}>
                Thêm người dùng mới
            </Button>
            <Input.Search placeholder="input search text" onSearch={handleSearch} enterButton />

            <UserTable />
            <Pagination
                total={userTotalCount}
                onChange={hangleChangePagination}
                defaultPageSize={pageSizeState}
                defaultCurrent={1}
            />
            <UserInputModal />
        </>
    );
};
export default UserMgmt;
