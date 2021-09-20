import { Button } from 'antd';
import { ManagementContext } from 'contexts/ManagementContext';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

interface IUserAddButtonProps {}

const UserAddButton: React.FC<IUserAddButtonProps> = ({}) => {
    const { t } = useTranslation(['user-mgmt']);
    const { addModalState } = useContext(ManagementContext);
    const { setShowAddModal } = addModalState;
    return (
        <div>
            <Button type="primary" className="my-1" onClick={() => setShowAddModal(true)}>
                {t('add-user')}
            </Button>
        </div>
    );
};
export default UserAddButton;
