import { IPhimState } from './phimTypes';
import * as phimTypes from './phimTypes';
import { IAction } from '../../type';

const initialState: IPhimState = {
    danhSachPhim: [],
};

export const phimReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case phimTypes.GET_ALL_PHIM:
            state.danhSachPhim = action.payload;
            return { ...state };

        default:
            return state;
    }
};
