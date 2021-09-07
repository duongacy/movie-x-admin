import { Form, Input, Button, Radio, FormInstance } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { IUserInput } from 'common/formatTypes/User';
import { MA_NHOM } from 'config';
import { ManagementContext } from 'contexts/ManagementContext';
import { createRef, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { addUserAction } from 'store/user/userAction';

interface Props {}
const UserAddModal = (props: Props) => {
    const dispatch = useDispatch();
    const { addModalState } = useContext(ManagementContext);
    const { showAddModal, setShowAddModal } = addModalState;

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
        },
    };
    const handleFinish = (values: any) => {
        const userInput: IUserInput = { ...values, maNhom: MA_NHOM };
        dispatch(addUserAction(userInput));
    };
    const formRef = createRef<FormInstance>();
    const handleReset = () => {
        formRef.current?.resetFields();
    };
    return (
        <Modal
            title="Thêm người dùng"
            visible={showAddModal}
            footer={false}
            onCancel={() => setShowAddModal(false)}
        >
            <Form
                ref={formRef}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                validateMessages={validateMessages}
                onFinish={handleFinish}
            >
                <Form.Item name="taiKhoan" label="Tên tài khoản" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="hoTen" label="Họ tên" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
                    <Input />
                </Form.Item>
                {/* <Form.Item name="soDt" label="Số điện thoại" rules={[{ required: true }]}>
                    <Input />
                </Form.Item> */}
                <Form.Item name="matKhau" label="Mật khẩu" rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item name="maLoaiNguoiDung" label="Loại người dùng">
                    <Radio.Group>
                        <Radio value="KhachHang">Khách hàng</Radio>
                        <Radio value="QuanTri">Quản trị viên</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={handleReset}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default UserAddModal;
