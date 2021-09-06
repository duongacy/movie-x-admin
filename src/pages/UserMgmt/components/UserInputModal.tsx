import { Form, Input, Radio, Button, FormInstance, Popconfirm } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { createRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IUser, IUserInput } from '../../../common/formatTypes/User';
import { MA_NHOM } from '../../../config';
import {
    addUserAction,
    deleteUserAction,
    hideModalUserAction,
    updateUserAction,
} from '../../../store/user/userAction';

interface IFilmEditModalProps {}

const UserInputModal: React.FC<IFilmEditModalProps> = () => {
    const dispatch = useDispatch();
    const { userInfo, isEdit, isUserModalShow, userHandleStatus } = useSelector(
        (root: any) => root.userStore
    );
    const { taiKhoan } = userInfo;
    const handleSubmit = (values: IUser) => {
        const userInput: IUserInput = { ...values, maNhom: MA_NHOM };
        if (isEdit) {
            dispatch(updateUserAction(userInput));
        } else {
            dispatch(addUserAction(userInput));
        }
    };
    const handleCancel = () => {
        dispatch(hideModalUserAction());
    };
    const handleDelete = () => {
        dispatch(deleteUserAction(taiKhoan));
    };
    /* ----------- Khi cập nhật userInfo nên set lại field cho form ---------- */
    useEffect(() => {
        formRef.current?.setFieldsValue(userInfo);
    }, [userInfo]);

    const [form] = Form.useForm();
    const formRef = createRef<FormInstance>();
    const hideModalUser = () => {
        dispatch(hideModalUserAction());
    };
    return (
        <Modal
            title={isEdit ? 'Cập nhật người dùng' : 'Thêm người dùng'}
            visible={isUserModalShow}
            onCancel={hideModalUser}
            footer={false}
        >
            <Form ref={formRef} form={form} onFinish={handleSubmit}>
                <Form.Item
                    name="taiKhoan"
                    label="Tài khoản"
                    rules={[{ required: true, message: 'Please input' }]}
                >
                    <Input disabled={isEdit} />
                </Form.Item>
                <Form.Item
                    name="hoTen"
                    label="Họ tên"
                    rules={[{ required: true, message: 'Please input' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: 'Please input' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="soDt"
                    label="Số điện thoại"
                    rules={[{ required: true, message: 'Please input' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="matKhau"
                    label="Mật khẩu"
                    rules={[{ required: true, message: 'Please input' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item name="maLoaiNguoiDung" label="Quyền truy cập">
                    <Radio.Group>
                        <Radio.Button value="KhachHang">Khách hàng</Radio.Button>
                        <Radio.Button value="QuanTri">Quản trị viên</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        {isEdit ? 'Cập nhật' : 'Thêm'}
                    </Button>
                    <Button type="default" onClick={handleCancel}>
                        Cancel
                    </Button>
                    {isEdit && (
                        <Popconfirm title="Sure to delete?" onConfirm={handleDelete}>
                            <Button>Delete</Button>
                        </Popconfirm>
                    )}
                </Form.Item>
                <p style={{ color: 'red' }}>{userHandleStatus}</p>
            </Form>
        </Modal>
    );
};

export default UserInputModal;
