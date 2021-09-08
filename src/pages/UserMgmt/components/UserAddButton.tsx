import { Button } from 'antd';
import { ManagementContext } from 'contexts/ManagementContext';
import React, { useContext } from 'react';

interface IUserAddButtonProps {}

const UserAddButton: React.FC<IUserAddButtonProps> = ({}) => {
    const { addModalState } = useContext(ManagementContext);
    const { setShowAddModal } = addModalState;
    return (
        <div>
            <Button type="primary" className="my-1" onClick={() => setShowAddModal(true)}>
                Thêm người dùng mới
            </Button>
        </div>
    );
};
export default UserAddButton;
