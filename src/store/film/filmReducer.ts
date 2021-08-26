import { IFilmState } from './filmTypes';
import * as filmTypes from './filmTypes';
import { IAction } from '../../type';
import { IFilm } from '../../common/formatTypes/Film';

const filmDetailInit: IFilm = {
    maPhim: 0,
    tenPhim: '',
    biDanh: '',
    trailer: '',
    hinhAnh: '',
    moTa: '',
    maNhom: '',
    hot: false,
    dangChieu: false,
    sapChieu: false,
    ngayKhoiChieu: '',
};
const initialState: IFilmState = {
    listFilm: [],
    filmDetail: filmDetailInit,
};

export const filmReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case filmTypes.GET_ALL_PHIM:
            state.listFilm = action.payload;
            return { ...state };
        case filmTypes.GET_FILM_EDIT:
            state.filmDetail = { ...action.payload.film };
            return { ...state };

        case filmTypes.RESET_FILM_MODAL:
            state.filmDetail = filmDetailInit;
            return { ...state };

        default:
            return { ...state };
    }
};
