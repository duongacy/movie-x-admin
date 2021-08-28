import { IAction } from '../../type';
import * as userTypes from './userTypes';
import { IUser } from '../../common/formatTypes/User';

const userDefault: IUser = {
    taiKhoan: '',
    hoTen: '',
    email: '',
    soDt: '',
    matKhau: '',
    maLoaiNguoiDung: 'KhachHang',
};
const initialState: userTypes.IUserState = {
    listUser: [],
    listUserLoading: false,
    userInfo: userDefault,
    userTotalCount: 0,
    isEdit: false,
    isUserModalShow: false,
    userHandleStatus: '',
};

export const userReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case userTypes.GET_USER_LIST: // type này phụ thuộc nhiều trường hợp query
            const { items, totalCount } = action.payload;
            state.listUser = items;
            state.userTotalCount = totalCount;
            break;

        case userTypes.SHOW_USER_MODAL_UPDATE:
            state.userInfo = { ...action.payload };
            state.isEdit = true;
            state.isUserModalShow = true;
            return { ...state };
        case userTypes.SHOW_USER_MODAL_ADD:
            state.userInfo = { ...userDefault };
            state.isEdit = false;
            state.isUserModalShow = true;
            break;

        case userTypes.SUBMIT_USER:
            break;

        case userTypes.HIDE_MODAL:
            state.isUserModalShow = false;
            break;

        case userTypes.SET_USER_HANDLE_STATUS:
            state.userHandleStatus = action.payload;
            break;

        default:
            return state;
    }

    return { ...state };
};
