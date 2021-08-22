import React from 'react';
import { Link } from 'react-router-dom';

interface IUserFormProps {}
const UserForm: React.FC<IUserFormProps> = (props) => {
    return (
        <div className="hidden tablet:flex gap-1 text-light">
            <Link to="/login">
                <a className="opacity-60 hover:opacity-80 text-s-text text-12">
                    Đăng nhập / Đăng kí
                </a>
            </Link>
        </div>
    );
};
export default UserForm;
