import { Table, Breadcrumb, Button, Pagination, Input, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../../common/formatTypes/User';
import {
    getUserByNameAction,
    showModalAddUserAction,
    showModalEditUserAction,
} from '../../store/user/userAction';
import UserInputModal from './components/UserInputModal';
import UserTableColumn from './components/UserTableColumn';

const UserMgmt = () => {
    const dispatch = useDispatch();
    /* -------------------------------- useState -------------------------------- */
    const [pageState, setPageState] = useState(1);
    const [pageSizeState, setPageSizeState] = useState(10);
    const [taiKhoanState, setTaiKhoanState] = useState('');
    /* -------------------------------------------------------------------------- */

    /* ----------------------- useSelector and handle data ---------------------- */
    const { loading } = useSelector((state: any) => state.parentStore);
    const { listUser, userTotalCount } = useSelector((root: any) => root.userStore);
    const tableData = listUser.map((item: IUser) => ({
        ...item,
        key: item.taiKhoan,
    }));
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
    const showEditUser = (taiKhoan: string) => {
        dispatch(showModalEditUserAction(taiKhoan));
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

    /* -------------------------------- call HOF -------------------------------- */
    const columns = UserTableColumn(showEditUser);
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
            <Table
                columns={columns}
                dataSource={tableData}
                pagination={false}
                loading={loading}
                onRow={(record: IUser, index: any) => {
                    return {
                        onDoubleClick: (event: any) => {
                            showEditUser(record.taiKhoan);
                        },
                    };
                }}
                rowClassName="cursor-pointer"
            />
            {/* Lưu ý table và pagination là 2 thành phần tách biệt, dùng pagination chỉ để dispatch đến các hàm phân trang và trả về record mới */}
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
