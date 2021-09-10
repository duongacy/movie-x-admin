import { Form, Input, Button, Checkbox, FormInstance, Divider} from 'antd';
import { createRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginAction } from '../../../store/account/accountActions';

import './styles.scss'


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
            setLoginAlert('Không có lịch sử đăng nhập !');
            setTimeout(() => {
                setLoginAlert('');
            }, 3000);
        }
    };

    return (
        <>
            <div className="form-login-page">

                <div className="form-login">
                <div className="form-login-page__img-wrapper">
                <img src="/images/background/imglogin.jpeg"/>
                </div>
                <Form
                ref={formRef}
                name="basic"
                // labelCol={{ span: 8 }}
                // wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                className="form-login-page__form"
            >
                <div className="form-login-page__login-title">
                <h6 className="text-20 text-center text-white my-2">ĐĂNG NHẬP</h6>
                </div>
                <Form.Item
                    label="Tên đăng nhập"
                    name="taiKhoan"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    className="form-login-page__form-item form-login-page__form-item-username"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mật khẩu"
                    name="matKhau"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    className="form-login-page__form-item"
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="remember"
                >
                    <Checkbox >Ghi nhớ tài khoản</Checkbox>
                    
                </Form.Item>

                <Form.Item className="form-login-page__form-item-last">
                    <Button htmlType="submit" className="btn-login">
                        Đăng nhập
                    </Button>

                    <Divider />

                    <a className="ml-1" onClick={removeLoginHistory}>
                        Xóa lịch sử đăng nhập ?
                    </a>
                    <br/>
                    <a onClick={usingLoginHistory} className="ml-2 hover:text-success">
                        Sử dụng tài khoản đã lưu gần nhất ?
                    </a>
                </Form.Item>
                
                <h6 style={{ color: 'red' }}>{loginAlert}</h6>
            </Form>
                </div>
            </div>
        </>
    );
};

export default Login;

// "taiKhoan": "YDT",
// "matKhau": "1@Ydtydt",
