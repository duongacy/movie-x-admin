import { IAction } from '../../type';
import * as userTypes from './userTypes';
import { IUser } from '../../common/formatTypes/User';

const initialState = {
    listUserRow: [],
    userTotalCount: 0,
};

export const userReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case userTypes.GET_USER_LIST: // type này phụ thuộc nhiều trường hợp query
            const { items, totalCount } = action.payload;
            state.listUserRow = items.map((item: IUser) => ({
                ...item,
                key: item.taiKhoan,
            }));
            state.userTotalCount = totalCount;
            break;
        default:
            return state;
    }

    return { ...state };
};
