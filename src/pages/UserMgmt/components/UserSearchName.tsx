import { Input } from 'antd';
import { ManagementContext } from 'contexts/ManagementContext';
import { useContext } from 'react';

interface Props {}

const UserSearchName = (props: Props) => {
    const { searchState, paginationState } = useContext(ManagementContext);
    const { setSearchKey } = searchState;
    const { setPage } = paginationState;
    return (
        <Input.Search
            placeholder="input search text"
            onSearch={(value) => {
                setSearchKey(value);
                setPage(1);
            }}
            enterButton
        />
    );
};

export default UserSearchName;
