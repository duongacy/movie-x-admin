import React from 'react';
import { useHistory } from 'react-router-dom';

interface ILoginProps {
    returnPath?: string;
}

const LoginPage: React.FC<ILoginProps> = (props) => {
    const history = useHistory();
    const handleLogin = () => {
        localStorage.setItem('userLogin', 'ok'); // chỗ này sẽ lấy user trả về khi login, và set cho localStorage
        // Nếu quyền người dùng là admin, thì sẽ lưu xuống localStorage
        if (true) {//hard code
            localStorage.setItem('isAdmin', 'ok');
            // sau đó push qua trang admin
        }

        props.returnPath && history.push(props.returnPath);
    };
    return (
        <div>
            <button className="border" onClick={handleLogin}>
                login
            </button>
        </div>
    );
};

export default LoginPage;
