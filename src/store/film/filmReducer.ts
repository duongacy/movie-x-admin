import { IFilmState } from './filmTypes';
import * as filmTypes from './filmTypes';
import { IAction } from '../../type';

const initialState: IFilmState = {
    listFilm: [],
};

export const filmReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case filmTypes.GET_ALL_PHIM:
            state.listFilm = action.payload;
            return { ...state };
        default:
            return state;
    }
};
