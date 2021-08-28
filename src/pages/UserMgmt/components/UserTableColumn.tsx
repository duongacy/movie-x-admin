import { Space } from 'antd';
import React from 'react';
import { IUser } from '../../../common/formatTypes/User';

const UserTableColumn = (callbackShowEditUser: (taiKhoan: string) => void) => {
    return [
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
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'soDt',
            key: 'soDt',
        },
        {
            title: 'Mật khẩu',
            dataIndex: 'matKhau',
            key: 'matKhau',
        },
        {
            title: 'Quyền truy cập',
            dataIndex: 'maLoaiNguoiDung',
            key: 'maLoaiNguoiDung',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text: string, record: IUser) => (
                <Space size="middle">
                    <a onClick={() => callbackShowEditUser(record.taiKhoan)}>Edit</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ]
};
export default UserTableColumn;
