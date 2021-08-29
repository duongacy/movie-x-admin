import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../../../common/formatTypes/User';
import { showModalEditUserAction } from '../../../store/user/userAction';

export const UserTable = () => {
    const dispatch = useDispatch();
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
    ];
    const showEditUser = (taiKhoan: string) => {
        dispatch(showModalEditUserAction(taiKhoan));
    };
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
                        showEditUser(record.taiKhoan);
                    },
                };
            }}
            rowClassName="cursor-pointer"
        />
    );
};
