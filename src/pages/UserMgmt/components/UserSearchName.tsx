import { Input } from 'antd';
import { ManagementContext } from 'contexts/ManagementContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {}

const UserSearchName = (props: Props) => {
    const { t } = useTranslation(['user-mgmt']);
    const { searchState, paginationState } = useContext(ManagementContext);
    const { setSearchKey } = searchState;
    const { setPage } = paginationState;
    return (
        <Input.Search
            placeholder={t('search')}
            onSearch={(value) => {
                setSearchKey(value);
                setPage(1);
            }}
            enterButton
        />
    );
};

export default UserSearchName;
