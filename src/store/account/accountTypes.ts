// import { IFilm } from '../../common/formatTypes/Film';

import { IAccount } from '../../common/formatTypes/Account';

// export const GET_ALL_PHIM = 'GET_ALL_PHIM';
// export const GET_FILM_EDIT = 'GET_FILM_EDIT';
// export const RESET_FILM_MODAL = 'RESET_FILM_MODAL';

// export interface IFilmState {
//     listFilm: IFilm[];
//     filmDetail: IFilm | null;
// }
export const REMEMBER_USER = 'REMEMBER_USER';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export type ILoginPayload = {
    taiKhoan: string;
    matKhau: string;
};
export type IAccountState = {
    userInfo: IAccount;
    loginStatus: number;
};
