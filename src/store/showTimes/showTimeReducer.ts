import { IFilm } from 'common/formatTypes/Film';
import { IAction } from 'type';
import { FETCH_CINEPLEX_LIST, FETCH_FILM_DETAIL, FETCH_THEATRE_LIST } from './showTimeTypes';

const initialState = {
    filmDetail: <IFilm>{
        tenPhim: '',
    },
    cineplexList: [],
    theatreList: [],
};

export const showTimeReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case FETCH_FILM_DETAIL:
            state.filmDetail = action.payload;
            return { ...state };
        case FETCH_CINEPLEX_LIST:
            state.cineplexList = action.payload;
            return { ...state };
        case FETCH_THEATRE_LIST:
            state.theatreList = action.payload;
            return { ...state };

        default:
            return state;
    }
};
