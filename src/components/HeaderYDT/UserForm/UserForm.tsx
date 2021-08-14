import { UserOutlined } from '@ant-design/icons';
import React from 'react';

interface IUserFormProps {}
const UserForm: React.FC<IUserFormProps> = (props) => {
    return (
        <div className="hidden tablet:flex gap-1 text-light">
            <a className="opacity-60 hover:opacity-80 text-s-text text-12 w-2.5 h-2.5 bg-primary rounded-full flex items-center justify-center"><UserOutlined/></a>
        </div>
    );
};
export default UserForm;
