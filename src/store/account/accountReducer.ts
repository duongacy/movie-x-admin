import * as accountTypes from './accountTypes';
import { IAction } from '../../type';

/* ---------------------- Lấy userInfo từ localStorage ---------------------- */
const userInfoLocal = JSON.parse(localStorage.getItem('userInfo')!);

const initialState: accountTypes.IAccountState = {
    userInfo: userInfoLocal,
    loginStatus: -1,
};

export const accountReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case accountTypes.REMEMBER_USER:
            state.userInfo = action.payload;
            /* --------------- Khi đăng nhập nhớ lưu userInfo xuống localStorage --------------- */
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
            if (state.userInfo !== null && state.userInfo.maLoaiNguoiDung === 'QuanTri') {
                state.loginStatus = 1;
            } else {
                state.loginStatus = 2;
            }
            break;

        case accountTypes.LOGIN_FAILED:
            state.loginStatus = 0;
            break;
        case accountTypes.LOGOUT:
            state.loginStatus = -1;
            state.userInfo = null;
            localStorage.removeItem('userInfo');
            console.log('da logout');
            
            break;
        default:
            break;
    }
    return { ...state };
};
