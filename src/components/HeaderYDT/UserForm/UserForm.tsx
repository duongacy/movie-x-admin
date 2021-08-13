import React from 'react';

interface IUserFormProps {}
const UserForm: React.FC<IUserFormProps> = (props) => {
    return (
        <div className="hidden tablet:flex gap-1">
            <a className="opacity-60 hover:opacity-80 text-s-text text-10">Đăng nhập</a>
            <a className="opacity-60 hover:opacity-80 text-s-text text-10">Đăng ký</a>
        </div>
    );
};
export default UserForm;
