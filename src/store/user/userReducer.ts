import { IAction } from '../../type';
import * as userTypes from './userTypes';

const initialState: userTypes.IUserState = {
    listUser: [],
    listUserLoading: false,
    userDefault: {
        taiKhoan: '',
        hoTen: '',
        email: '',
        soDt: '',
        matKhau: '',
        maLoaiNguoiDung: 'KhachHang',
    },
    userTotalCount: 0,
};

export const userReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case userTypes.GET_USER_LIST: // type này phụ thuộc nhiều trường hợp query
            const { items, totalCount } = action.payload;
            state.listUser = items;
            state.userTotalCount = totalCount;
            break;

        case userTypes.GET_USER_EDIT:
            break;

        case userTypes.ADD_USER:
            break;

        case userTypes.EDIT_USER:
            break;

        case userTypes.DELETE_USER:
            break;

        case userTypes.SET_LIST_USER_LOADING:
            state.listUserLoading = action.payload;
            break;
        default:
            return state;
    }

    return { ...state };
};
