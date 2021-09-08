import { ManagementProvider } from 'contexts/ManagementContext';
import UserAddButton from './components/UserAddButton';
import UserAddModal from './components/UserAddModal';
import UserEditModal from './components/UserEditModal';
import UserPagination from './components/UserPagination';
import UserSearchName from './components/UserSearchName';
import { UserTable } from './components/UserTable';

const UserMgmt = () => {
    return (
        <ManagementProvider>
            <div style={{display:"flex", flexDirection:"column", gap:"16px"}}>
                <UserSearchName />
                <UserAddButton />
                <UserTable />
            </div>
            <UserPagination />
            <UserAddModal />
            <UserEditModal />
        </ManagementProvider>
    );
};
export default UserMgmt;
