import React from 'react';

interface IUserFormProps {}
const UserForm: React.FC<IUserFormProps> = (props) => {
    return (
        <form className="inline-flex gap-1.5 text-12 text-s-text">
            <a className="opacity-60 hover:opacity-80">Đăng nhập</a>
        </form>
    );
};
export default UserForm;
