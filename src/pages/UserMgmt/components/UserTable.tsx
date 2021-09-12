import { Popconfirm, Table } from 'antd';
import { ManagementContext } from 'contexts/ManagementContext';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserAction } from 'store/user/userAction';
import { IUserRow } from 'store/user/userTypes';
import { IUser } from '../../../common/formatTypes/User';

export const UserTable = () => {
    const dispatch = useDispatch();
    const { addModalState, editModalState, searchState, paginationState, userContext } =
        useContext(ManagementContext);
    const { setShowEditModal, setInputFields } = editModalState;
    const { page, pageSize } = paginationState;
    const { searchKey } = searchState;
    const { reloadUser } = userContext;

    useEffect(() => {
        reloadUser();
    }, [page, pageSize, searchKey]);
    const columns = [
        {
            title: 'Tài khoản',
            dataIndex: 'taiKhoan',
            key: 'taiKhoan',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Họ tên',
            dataIndex: 'hoTen',
            key: 'hoTen',
        },
        {
            title: 'Quyền truy cập',
            dataIndex: 'maLoaiNguoiDung',
            key: 'maLoaiNguoiDung',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (record: IUserRow) => (
                <Popconfirm
                    title="Bạn có muốn xóa tài khoản này?"
                    onConfirm={() => {
                        dispatch(deleteUserAction(record.taiKhoan, reloadUser));
                    }}
                >
                    <a>Delete</a>
                </Popconfirm>
            ),
        },
    ];

    const { loading } = useSelector((root: any) => root.parentStore);
    const { listUserRow } = useSelector((root: any) => root.userStore);
    return (
        <Table
            columns={columns}
            dataSource={listUserRow}
            pagination={false}
            loading={loading}
            onRow={(record: IUser) => {
                return {
                    onDoubleClick: () => {
                        setShowEditModal(true);
                        setInputFields(record);
                    },
                };
            }}
            rowClassName="cursor-pointer"
        />
    );
};
