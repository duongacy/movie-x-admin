import { Form, Input, Radio, Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React from 'react';
import { IUser } from '../../../common/formatTypes/User';

interface IFilmInputModalProps {
    show: boolean;
    callbackCancel?: () => void;
    initialValues: IUser;
}

const UserInputModal: React.FC<IFilmInputModalProps> = ({
    show,
    callbackCancel,
    initialValues,
}) => {
    const handleSubmit = (values: any) => {
        console.log('submit data', values);
    };
    const [form] = Form.useForm();
    return (
        <Modal title="Cập nhật người dùng" visible={show} onCancel={callbackCancel} footer={false}>
            <Form form={form} initialValues={initialValues} onFinish={handleSubmit}>
                <Form.Item name="taiKhoan" label="Tài khoản">
                    <Input />
                </Form.Item>
                <Form.Item name="hoTen" label="Họ tên">
                    <Input />
                </Form.Item>
                <Form.Item name="email" label="Email">
                    <Input />
                </Form.Item>
                <Form.Item name="soDt" label="Số điện thoại">
                    <Input />
                </Form.Item>
                <Form.Item name="matKhau" label="Mật khẩu">
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
                        Submit
                    </Button>
                    <Button type="default">Cancel</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default UserInputModal;
