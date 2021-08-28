import { loginService } from '../../services/user/user.service';
import { ILoginPayload } from './accountTypes';
import * as accountTypes from './accountTypes';

export const loginAction = (payload: any) => {
    return (dispatch: any) => {
        const { taiKhoan, matKhau, remember } = payload;
        const loginPayload: ILoginPayload = {
            taiKhoan,
            matKhau,
        };
        const promise = loginService(loginPayload);
        promise
            .then((rs) => {
                const userInfo = rs.data.content;
                const { maLoaiNguoiDung } = userInfo;

                dispatch({
                    type: accountTypes.REMEMBER_USER,
                    payload: userInfo,
                });
                //Khi check đúng tài khoản quản trị sẽ lưu thông tin đăng nhập vào local storage
                maLoaiNguoiDung === 'QuanTri' &&
                    remember &&
                    localStorage.setItem('loginRemember', JSON.stringify(payload));
            })
            .catch((err) =>
                dispatch({
                    type: accountTypes.LOGIN_FAILED,
                    payload: null,
                })
            );
    };
};

export const logoutAction = () => {
    return (dispatch: any) => {
        dispatch({
            type: accountTypes.LOGOUT,
            payload: null,
        });
    };
};
