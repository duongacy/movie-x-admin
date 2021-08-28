import { IUser } from '../../common/formatTypes/User';

export const GET_USER_LIST = 'GET_USER_LIST';
export const SHOW_USER_MODAL_UPDATE = 'SHOW_USER_MODAL_UPDATE';
export const SHOW_USER_MODAL_ADD = 'SHOW_USER_MODAL_ADD';
export const HIDE_MODAL = 'HIDE_MODAL';

export const SUBMIT_USER = 'SUBMIT_USER';
export const DELETE_USER = 'DELETE_USER';
export const SET_USER_HANDLE_STATUS = 'SET_USER_HANDLE_STATUS';

export type IUserState = {
    listUserLoading: boolean;
    listUser: IUser[];
    userInfo: IUser;
    userTotalCount: number;
    isEdit: boolean;
    isUserModalShow: boolean;
    userHandleStatus: string;
};
