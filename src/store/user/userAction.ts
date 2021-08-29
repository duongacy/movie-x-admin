import { IUserInput } from '../../common/formatTypes/User';
import {
    addUserService,
    getUserByTuKhoa,
    getUserByNamePaginationService,
    updateUserService,
    deleteUserServices,
} from '../../services/user/user.service';
import { IAction } from '../../type';
import { setLoadingAction } from '../parent/parentAction';
import {
    SHOW_USER_MODAL_UPDATE,
    GET_USER_LIST,
    SHOW_USER_MODAL_ADD,
    HIDE_MODAL,
    SET_USER_HANDLE_STATUS,
    DELETE_USER,
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

export const showModalAddUserAction = () => {
    return (dispatch: any) => {
        const action: IAction = {
            type: SHOW_USER_MODAL_ADD,
            payload: null,
        };
        dispatch(action);
    };
};
export const showModalEditUserAction = (taiKhoan: string) => {
    return (dispatch: any) => {
        const userPromise = getUserByTuKhoa(taiKhoan);
        userPromise.then((rs) => {
            const action: IAction = {
                type: SHOW_USER_MODAL_UPDATE,
                payload: rs.data.content[0],
            };
            dispatch(action);
        });
    };
};
export const hideModalUserAction = () => {
    return (dispatch: any) => {
        const action: IAction = {
            type: HIDE_MODAL,
            payload: null,
        };
        dispatch(action);
    };
};

export const addUserAction = (user: IUserInput) => {
    return (dispatch: any) => {
        dispatch(setLoadingAction(true));
        const promise = addUserService(user);
        promise
            .then((rs) => {
                dispatch(hideModalUserAction());
            })
            .catch((err) => {
                const { content } = err.response.data;
                dispatch(setUserHandleStatusAction(content));
            });
    };
};

export const updateUserAction = (user: IUserInput) => {
    return (dispatch: any) => {
        const promise = updateUserService(user);
        promise.then((rs) => {
            dispatch(hideModalUserAction());
        });
    };
};

export const setUserHandleStatusAction = (status: string) => {
    return (dispatch: any) => {
        const action: IAction = {
            type: SET_USER_HANDLE_STATUS,
            payload: status,
        };
        dispatch(action);
    };
};

export const deleteUserAction = (taiKhoan: string) => {
    return (dispatch: any) => {
        const promise = deleteUserServices(taiKhoan);
        promise
            .then((rs) => {
                dispatch(hideModalUserAction());
                const action: IAction = {
                    type: DELETE_USER,
                    payload: taiKhoan,
                };
                dispatch(action);
            })
            .catch((err) => {
                const { content } = err.response.data;
                dispatch(setUserHandleStatusAction(content));
            });
    };
};
