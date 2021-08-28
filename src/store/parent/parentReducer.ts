import { IAction } from '../../type';
import { SET_LOADING } from './parentTypes';

const initialState = {
    loading: false,
};

export const parentReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case SET_LOADING:
            state.loading = action.payload;
            break;

        default:
            return state;
    }
    return { ...state };
};
