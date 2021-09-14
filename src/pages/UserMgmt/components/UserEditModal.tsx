import { Button, Form, FormInstance, Input, Radio } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { IUserInput } from 'common/formatTypes/User';
import { MA_NHOM } from 'config';
import { ManagementContext } from 'contexts/ManagementContext';
import { createRef, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserAction } from 'store/user/userAction';
import { useTranslation } from 'react-i18next';

interface Props {}

const UserEditModal = (props: Props) => {
    const { t } = useTranslation(['user-mgmt']);
    const dispatch = useDispatch();
    const { editModalState, userContext } = useContext(ManagementContext);
    const { showEditModal, setShowEditModal, inputFields } = editModalState;
    const { reloadUser } = userContext;

    const validateMessages = {
        required: '${label}' + t('required'),
        types: {
            email: '${label}' + t('not-valid'),
        },
    };
    const handleFinish = (values: any) => {
        const userInput: IUserInput = { ...values, maNhom: MA_NHOM };
        dispatch(updateUserAction(userInput, reloadUser));
    };
    const formRef = createRef<FormInstance>();

    useEffect(() => {
        formRef.current?.setFieldsValue(inputFields);
    }, [inputFields]);
    return (
        <Modal
            title={inputFields.taiKhoan}
            visible={showEditModal}
            footer={false}
            onCancel={() => setShowEditModal(false)}
        >
            <Form
                ref={formRef}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                validateMessages={validateMessages}
                onFinish={handleFinish}
                initialValues={inputFields}
            >
                <Form.Item
                    name="taiKhoan"
                    hidden
                    label={t('username')}
                    rules={[{ required: true }]}
                >
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
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default UserEditModal;
