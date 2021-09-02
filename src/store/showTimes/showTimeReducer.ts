import { IAction } from 'type';
import { FETCH_SHOW_TIME_LIST } from './showTimeTypes';

const initialState = {
    listShowTime: [],
    totalCount: 0,
};

export const showTimeReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case FETCH_SHOW_TIME_LIST:
            // return { ...state, ...payload }
            break;

        default:
            return state;
    }
};
