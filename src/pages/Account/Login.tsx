import { Form, Input, Button, Checkbox } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginAction } from '../../store/account/accountActions';
import { ILoginPayload } from '../../store/account/accountTypes';

interface ILoginProps {}
const Login: React.FC<ILoginProps> = ({}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { loginStatus } = useSelector((root: any) => root.accountStore);
    const [loginAlert, setLoginAlert] = useState('');
    const onFinish = (values: ILoginPayload) => {
        dispatch(loginAction(values));
    };
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

    return (
        <>
            <h6 className="text-20 text-center my-2">Login</h6>
            <Form
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
                {/* <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

                <h6 style={{ color: 'red' }}>{loginAlert}</h6>
            </Form>
        </>
    );
};

export default Login;

// "taiKhoan": "YDT",
// "matKhau": "1@Ydtydt",
