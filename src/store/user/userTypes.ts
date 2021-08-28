import { IUser } from '../../common/formatTypes/User';

export const GET_USER_LIST = 'GET_USER_LIST';
export const GET_USER_EDIT = 'GET_USER_EDIT';
export const ADD_USER = 'SUBMIT_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';
export const SET_LIST_USER_LOADING = 'SET_LIST_USER_LOADING';

export type IUserState = {
    listUserLoading: boolean;
    listUser: IUser[];
    userDefault: IUser;
    userTotalCount: number;

};
