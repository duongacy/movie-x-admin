import { message } from 'antd';
import { IUserInput } from '../../common/formatTypes/User';
import {
    addUserService,
    getUserByNamePaginationService,
    updateUserService,
    deleteUserServices,
} from '../../services/user/user.service';
import { IAction } from '../../type';
import { setLoadingAction } from '../parent/parentAction';
import {
    GET_USER_LIST,
} from './userTypes';

export const getUserByNameAction = (taiKhoan: string, page: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(setLoadingAction(true));
        const listUserPromise = getUserByNamePaginationService(taiKhoan, page, pageSize);
        listUserPromise.then((rs) => {
            const { content } = rs.data;
            const action: IAction = {
                type: GET_USER_LIST,
                payload: content,
            };
            dispatch(action);
            dispatch(setLoadingAction(false));
        });
    };
};

export const addUserAction = (user: IUserInput) => {
    return (dispatch: any) => {
        dispatch(setLoadingAction(true));
        const promise = addUserService(user);
        promise
            .then((rs) => {
                message.success('Them thanh cong');
            })
            .catch((err) => {
                message.error(err.response.data.content);
            });
    };
};

export const updateUserAction = (user: IUserInput, reloadUser: () => void) => {
    return (dispatch: any) => {
        const promise = updateUserService(user);
        promise
            .then((rs) => {
                message.success('Update thanh cong');
                reloadUser();
            })
            .catch((err) => {
                message.error(err.response.data.content);
            });
    };
};

export const deleteUserAction = (taiKhoan: string, callbackReload: () => void) => {
    return (dispatch: any) => {
        const promise = deleteUserServices(taiKhoan);
        promise
            .then((rs) => {
                message.success('Xoa tai khoan thanh cong');
                callbackReload();
            })
            .catch((err) => {
                const { content } = err.response.data;
                message.error(content);
            });
    };
};
