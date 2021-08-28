import { Table, Breadcrumb, Button, Pagination } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../../common/formatTypes/User';
import { getAllUserPaginationAction } from '../../store/user/userAction';
import UserInputModal from './components/UserInputModal';
import UserTableColumn from './components/UserTableColumn';

const PAGE_SIZE = 10;

const UserMgmt = () => {
    const dispatch = useDispatch();
    const { listUser, userDefault, userTotalCount, listUserLoading } = useSelector(
        (root: any) => root.userStore
    );
    useEffect(() => {
        dispatch(getAllUserPaginationAction(1, 10));
    }, []);
    const tableData = listUser.map((item: IUser) => ({
        ...item,
        key: item.taiKhoan,
    }));

    const [showModal, setShowModal] = useState(false);

    const handleCancel = () => {
        setShowModal(false);
    };

    const showEditUser = (taiKhoan: string) => {
        console.log('tai khoan ne:', taiKhoan);

        setShowModal(true);
    };
    const columns = UserTableColumn(showEditUser);
    const showAddUser = () => {
        setShowModal(true);
    };

    const hangleChangePagination = (page: number, pageSize: number = 10) => {
        dispatch(getAllUserPaginationAction(page, pageSize));
    };
    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Admin</Breadcrumb.Item>
                <Breadcrumb.Item>User management</Breadcrumb.Item>
            </Breadcrumb>
            <Button type="primary" className="my-1" onClick={showAddUser}>
                Thêm người dùng mới
            </Button>
            <Table
                columns={columns}
                dataSource={tableData}
                pagination={false}
                loading={listUserLoading}
            />
            {/* Lưu ý table và pagination là 2 thành phần tách biệt, dùng pagination chỉ để dispatch đến các hàm phân trang và trả về record mới */}
            <Pagination
                total={userTotalCount}
                onChange={hangleChangePagination}
                defaultPageSize={PAGE_SIZE}
                defaultCurrent={1}
            />
            <UserInputModal
                show={showModal}
                callbackCancel={handleCancel}
                initialValues={userDefault}
            />
        </>
    );
};
export default UserMgmt;
