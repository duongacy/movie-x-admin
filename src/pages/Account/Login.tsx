import { Form, Input, Button, Checkbox, FormInstance } from 'antd';
import { createRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginAction, logoutAction } from '../../store/account/accountActions';

interface ILoginProps {}
const Login: React.FC<ILoginProps> = ({}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { loginStatus } = useSelector((root: any) => root.accountStore);

    const loginRememberLocal = localStorage.getItem('loginRemember');
    const [loginRemember, setloginRemember] = useState(JSON.parse(loginRememberLocal!));

    const [loginAlert, setLoginAlert] = useState('');

    const onFinish = (values: any) => {
        dispatch(loginAction(values));
    };
    const removeLoginHistory = () => {
        localStorage.removeItem('loginRemember');
    };
    const formRef = createRef<FormInstance>();

    useEffect(() => {
        switch (loginStatus) {
            case 0:
                setLoginAlert('Đăng nhập thất bại');
                break;
            case 1:
                history.push('/');
                break;
            case 2:
                setLoginAlert('Bạn không có quyền quản trị');
                break;
            default:
                break;
        }
    }, [loginStatus]);
    const usingLoginHistory = () => {
        if (loginRemember !== null) {
            formRef.current!.setFieldsValue({
                taiKhoan: loginRemember.taiKhoan,
                matKhau: loginRemember.matKhau,
            });
        } else {
            setLoginAlert('Không có lịch sử đăng nhập');
            setTimeout(() => {
                setLoginAlert('');
            }, 3000);
        }
    };

    return (
        <>
            <h6 className="text-20 text-center my-2">Login</h6>
            <Form
                ref={formRef}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Username"
                    name="taiKhoan"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="matKhau"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="remember"
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox >Remember me</Checkbox>
                    <a className="ml-1" onClick={removeLoginHistory}>
                        Xóa lịch sử đăng nhập
                    </a>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Đăng nhập
                    </Button>

                    <a onClick={usingLoginHistory} className="ml-2 hover:text-success">
                        Sử dụng tài khoản đã lưu gần nhất
                    </a>
                </Form.Item>

                <h6 style={{ color: 'red' }}>{loginAlert}</h6>
            </Form>
        </>
    );
};

export default Login;

// "taiKhoan": "YDT",
// "matKhau": "1@Ydtydt",
