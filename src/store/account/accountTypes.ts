import { IAccount } from '../../common/formatTypes/Account';
export const REMEMBER_USER = 'REMEMBER_USER';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';

export type ILoginPayload = {
    taiKhoan: string;
    matKhau: string;
};
export type IAccountState = {
    userInfo: IAccount | null;
    loginStatus: number;
};
