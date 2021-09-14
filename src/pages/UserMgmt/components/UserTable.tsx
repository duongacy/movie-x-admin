import { Popconfirm, Table } from 'antd';
import { ManagementContext } from 'contexts/ManagementContext';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserAction } from 'store/user/userAction';
import { IUserRow } from 'store/user/userTypes';
import { IUser } from '../../../common/formatTypes/User';
import { useTranslation } from 'react-i18next';

export const UserTable = () => {
    const { t } = useTranslation(['user-mgmt']);
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
            title: t('username'),
            dataIndex: 'taiKhoan',
            key: 'taiKhoan',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: t('fullname'),
            dataIndex: 'hoTen',
            key: 'hoTen',
        },
        {
            title: t('permission'),
            dataIndex: 'maLoaiNguoiDung',
            key: 'maLoaiNguoiDung',
        },
        {
            title: t('action'),
            dataIndex: '',
            key: 'x',
            render: (record: IUserRow) => (
                <Popconfirm
                    title={t('remind-delete')}
                    onConfirm={() => {
                        dispatch(deleteUserAction(record.taiKhoan, reloadUser));
                    }}
                    okText={t('ok-text')}
                    cancelText={t('cancel-text')}
                >
                    <a>{t('delete')}</a>
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
