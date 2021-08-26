import { loginService } from '../../services/quanLyNguoiDung/quanLyNguoiDung.service';
import { ILoginPayload } from './accountTypes';
import * as accountTypes from './accountTypes';

export const loginAction = (payload: ILoginPayload) => {
    return (dispatch: any) => {
        const promise = loginService(payload);
        promise
            .then((rs) => {
                const userInfo = rs.data.content;
                dispatch({
                    type: accountTypes.REMEMBER_USER,
                    payload: userInfo,
                });
                console.log('dang nhap ne: ', rs.data.content);
            })
            .catch((err) =>
                dispatch({
                    type: accountTypes.LOGIN_FAILED,
                    payload: null,
                })
            );
    };
};
