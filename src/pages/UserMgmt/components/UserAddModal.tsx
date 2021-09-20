import { Form, Input, Button, Radio, FormInstance } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { IUserInput } from 'common/formatTypes/User';
import { MA_NHOM } from 'config';
import { ManagementContext } from 'contexts/ManagementContext';
import { createRef, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { addUserAction } from 'store/user/userAction';
import { useTranslation } from 'react-i18next';

interface Props {}
const UserAddModal = (props: Props) => {
    const { t } = useTranslation(['user-mgmt']);
    const dispatch = useDispatch();
    const { addModalState } = useContext(ManagementContext);
    const { showAddModal, setShowAddModal } = addModalState;

    const validateMessages = {
        required: '${label}' + t('required'),
        types: {
            email: '${label}' + t('not-valid')
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
            title={t("add-user")}
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
                <Form.Item name="taiKhoan" label={t('username')} rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="hoTen" label={t('fullname')} rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
                    <Input />
                </Form.Item>
                {/* <Form.Item name="soDt" label="Số điện thoại" rules={[{ required: true }]}>
                    <Input />
                </Form.Item> */}
                <Form.Item name="matKhau" label={t('password')} rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item name="maLoaiNguoiDung" label={t('user-type')}>
                    <Radio.Group>
                        <Radio value="KhachHang">{t('client')}</Radio>
                        <Radio value="QuanTri">{t('administrators')}</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                    {t('submit')}
                    </Button>
                    <Button htmlType="button" onClick={handleReset}>
                    {t('reset')}
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default UserAddModal;
