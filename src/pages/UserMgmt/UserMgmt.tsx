import {  ManagementProvider } from 'contexts/ManagementContext';
import UserAddModal from './components/UserAddModal';
import UserBreadcumb from './components/UserBreadcumb';
import UserEditModal from './components/UserEditModal';
import UserPagination from './components/UserPagination';
import UserSearchName from './components/UserSearchName';
import { UserTable } from './components/UserTable';

const UserMgmt = () => {
    return (
        <ManagementProvider>
            <UserBreadcumb />
            <UserSearchName />
            <UserTable />
            <UserPagination />
            <UserAddModal />
            <UserEditModal />
        </ManagementProvider>
    );
};
export default UserMgmt;
